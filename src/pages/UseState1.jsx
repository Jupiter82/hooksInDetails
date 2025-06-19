import React, { useState } from "react";
import Counter from "../components/counter";
import Topic from "../components/Topic";

function UseState1() {
  // const newArr = useState(0);
  // console.log(newArr, "newArr");
  // const counter = newArr[0];
  // const setCounter = newArr[1];

  //Array destructure
  // const [counter, setCounter] = useState(0);
  // console.log(counter, "display");

  // setCounter(counter + 1); ;// infiniti loop
  // function increaseCounter() {
  //   setCounter(counter + 1);
  // }
  return (
    <div>
      {" "}
      <Topic title="useState()" />
      <p>UseState Hook is a function to add State in Functional Component</p>
      <p>
        State-State is nothing but just values or variables of you component.
      </p>
      {/* <div>
        <h2>Counter: {counter}</h2>
        <button onClick={increaseCounter}>Increse</button>
      </div> */}
      <Counter />
    </div>
  );
}

export default UseState1;
