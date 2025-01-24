import App from "./App.jsx";
import render from "./lib/react/render";

const root = document.querySelector("#root");

export function rerender() {
  root.innerHTML = "";
  const appElement = App();
  render(appElement, root);
}

rerender();
