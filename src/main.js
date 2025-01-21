import App from "./App.jsx";
import render from "./lib/react/render";

const appElement = App();

render(appElement, document.querySelector("#root"));
