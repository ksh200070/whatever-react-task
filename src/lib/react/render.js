/**
 *
 *  <div id="App">
 *    <span>설명</span>
 *    <button onClick={handleButton}>버튼</button>
 *  </div>
 *
 *  virtualDOM = {
 *    tag: "div",
 *    props: {id: 'App'},
 *    children: [
 *      { tag: "span", props: {}, children: "설명" },
 *      {
 *        tag: "button",
 *        props: {
 *          onClick: () => {
 *            console.log("버튼");
 *          },
 *        },
 *        children: "버튼",
 *      },
 *    ],
 *  };
 */
export default function render(virtualDOM, container) {
  container.appendChild(renderRealDOM(virtualDOM));
}

function renderRealDOM(virtualDOM) {
  // 자식요소가 문자열인 경우,
  if (typeof virtualDOM === "string" || typeof virtualDOM === "number") {
    return document.createTextNode(virtualDOM);
  }

  // 마지막 노드일 경우, 재귀 탈출
  if (virtualDOM === undefined) return;

  // tag 생성
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
