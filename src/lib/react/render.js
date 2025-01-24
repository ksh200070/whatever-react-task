export default function render(virtualDOM, container) {
  if (virtualDOM === undefined) return;

  if (typeof virtualDOM === "string" || typeof virtualDOM === "number") {
    container.appendChild(document.createTextNode(virtualDOM));
    return;
  }

  const realDOM = document.createElement(virtualDOM.tagName);

  // props 등록 (이벤트 핸들러 DOM에 연결, id나 className 등록)
  Object.keys(virtualDOM.props || {}).forEach((prop) => {
    if (prop.startsWith("on")) {
      const eventType = prop.toLowerCase().substring(2);
      realDOM.addEventListener(eventType, virtualDOM.props[prop]);
    } else {
      realDOM[prop] = virtualDOM.props[prop];
    }
  });

  // 재귀 호출
  if (virtualDOM.children) {
    virtualDOM.children.forEach((child) => render(child, realDOM));
  }

  container.appendChild(realDOM);
}
