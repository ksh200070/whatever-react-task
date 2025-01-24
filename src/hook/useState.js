import { rerender } from "../main";

let currentStateKey = 0;
const states = [];

export function useState(initialState) {
  const key = currentStateKey;

  if (states.length === currentStateKey) {
    states.push(initialState);
  }

  const state = states[key];

  const setState = (newState) => {
    if (state === newState) return;

    if (JSON.stringify(newState) === JSON.stringify(state)) return;

    if (typeof newState === "function") {
      states[key] = newState(states[key]);
    } else {
      states[key] = newState;
    }

    rerender();
    currentStateKey = 0;
  };

  currentStateKey += 1;
  return [state, setState];
}
