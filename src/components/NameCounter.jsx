import React, { useState } from "react";

function NameCounter() {
  const [state, setState] = useState(0);
  const [name, setName] = useState();
  const clickFunction = () => {
    setState(state + 1);
  };
  return (
    <div>
      {" "}
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <p>
        {name} has counter : {state}
      </p>
      <button onClick={clickFunction}>Increment</button>
    </div>
  );
}

export default NameCounter;
