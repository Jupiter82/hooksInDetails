import React, { useState } from "react";

function UseState3() {
  const [state, setState] = useState(0);
  const [name, setName] = useState();
  const increseFunc = () => {
    setState(state + 1);
  };
  return (
    <div>
      <h3>useState with objects </h3>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      {/* onChange is an event handler that fires when the value of an input element changes. */}
      <p>
        {name} CLicked : {state} times
      </p>
      <button onClick={increseFunc}>increse</button>
    </div>
  );
}

export default UseState3;
