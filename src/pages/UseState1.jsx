import React, { useState } from "react";
const Welcome = ({ name }) => {
  return <h1> {name}</h1>;
};
function UseState1() {
  // const newArr = useState(0);
  // console.log(newArr, "newArr");
  // const counter = newArr[0];
  // const setCounter = newArr[1];

  const [counter, setCounter] = useState(0);
  console.log(counter, "display");

  // setCounter(counter + 1); ;// infiniti loop
  function increaseCounter() {
    setCounter(counter + 1);
  }
  return (
    <div>
      {" "}
      <Welcome name="useState()" />
      <div>
        <h1>Counter: {counter}</h1>
        <button onClick={increaseCounter}>Increse</button>
      </div>
    </div>
  );
}

export default UseState1;
