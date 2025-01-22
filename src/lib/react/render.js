export default function render(virtualDOM, container) {
  container.appendChild(renderRealDOM(virtualDOM));
}

function renderRealDOM(virtualDOM) {
  if (virtualDOM === undefined) return;

  if (typeof virtualDOM === "string" || typeof virtualDOM === "number") {
    return document.createTextNode(virtualDOM);
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
  virtualDOM.children.map(renderRealDOM).forEach((node) => {
    realDOM.appendChild(node);
  });

  return realDOM;
}
