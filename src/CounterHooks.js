import React, { useState } from "react";

export default function CounterHooks(props) {
  const [state, setState] = useState({ count: props.initialCount });
  function changeCount(amount) {
    setState((prevState) => {
      return { count: prevState.count + amount };
    });
  }
  return (
    <div>
      <button
        onClick={() => {
          changeCount(-1);
        }}
      >
        -
      </button>
      <span>{state.count}</span>
      <button
        onClick={() => {
          changeCount(1);
        }}
      >
        +
      </button>
    </div>
  );
}
