import React, { useReducer } from "react";

function Reducer() {
  const initialState = { count: 0, name: "default" };

  function reducer(state, action) {
    switch (action.type) {
      case "reset":
        return initialState;
      case "decrement":
        return { count: state.count - 1, name: "decreasing..." };
      case "increment":
        return { count: state.count + 1, name: "increasing!" };
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count(Reducer): {state.count}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <br />
      Name: {state.name}
    </div>
  );
}

export default Reducer;
