function renderRealDOM(virtualDOM) {
  // 자식요소가 문자열인 경우,
  if (typeof virtualDOM === "string" || typeof virtualDOM === "number") {
    return document.createTextNode(virtualDOM);
  }

  // 마지막 노드일 경우, 재귀 탈출
  if (virtualDOM === undefined) return;

  // tag 생성
  const $element = document.createElement(virtualDOM.tagName);

  // 재귀 호출
  virtualDOM.children.map(renderRealDOM).forEach((node) => {
    $element.appendChild(node);
  });
  return $element;
}

export default function render(virtualDOM, container) {
  container.appendChild(renderRealDOM(virtualDOM));
}
