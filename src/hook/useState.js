import App from "@/app";
import render from "@/lib/react/render";

let state = undefined;

export default function useState(initialState) {
  if (!state) {
    state = initialState;
  }

  const setState = (newState) => {
    if (state !== newState) {
      state = typeof newState === "function" ? newState(state) : newState;

      render(App(), document.querySelector("#root"));
    }
  };

  return [state, setState];
}
