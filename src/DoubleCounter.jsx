import { useReducer } from "react";

const initialState = {
  counterA: 0,
  counterB: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT_A":
      return { ...state, counterA: state.counterA + 1 };

    case "DECREMENT_A":
      return {
        ...state,
        counterA: Math.max(0, state.counterA - 1),
      };

    case "INCREMENT_B":
      return { ...state, counterB: state.counterB + 1 };

    case "DECREMENT_B":
      return {
        ...state,
        counterB: Math.max(0, state.counterB - 1),
      };

    case "RESET_ALL":
      return initialState;

    default:
      return state;
  }
}

export default function DoubleCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Double Counter</h2>

      <h3>Counter A: {state.counterA}</h3>
      <button
        disabled={state.counterA === 0}
        onClick={() => dispatch({ type: "DECREMENT_A" })}
      >
        - A
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT_A" })}>
        + A
      </button>

      <h3>Counter B: {state.counterB}</h3>
      <button
        disabled={state.counterB === 0}
        onClick={() => dispatch({ type: "DECREMENT_B" })}
      >
        - B
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT_B" })}>
        + B
      </button>

      <br />
      <br />

      <button onClick={() => dispatch({ type: "RESET_ALL" })}>
        Reset Both
      </button>
    </div>
  );
}