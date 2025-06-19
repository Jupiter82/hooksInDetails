import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <p>a component is a reusable piece of UI written as a function</p>
      <h2>Counter: {counter}</h2>
      <button onClick={increaseCounter}>Increse</button>
    </div>
  );
}

export default Counter;
