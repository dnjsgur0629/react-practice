import React, { useState } from "react";

function State() {
  const initialCount = 0;
  const initialName = "default";

  const [count, setCount] = useState(initialCount);
  const [name, setName] = useState(initialName);

  function handelClickDecrement() {
    setCount((prevState) => prevState - 1);
    setName("decreasing...");
  }

  function handelClickIncrement() {
    setCount((prevState) => prevState - 1);
    setName("increasing!");
  }

  function handleClickReset() {
    setCount(initialCount);
    setName(initialName);
  }

  return (
    <div>
      Count: {count}
      <button onClick={handleClickReset}>Reset</button>
      <button onClick={handelClickDecrement}>-</button>
      <button onClick={handelClickIncrement}>+</button>
      <br />
      Name: {name}
    </div>
  );
}

export default State;
