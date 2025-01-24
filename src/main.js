import App from "./App.jsx";
import { render } from "./hook/useState";

const appElement = App();

render(appElement, document.querySelector("#root"));
