import { useState } from "react";
import { Link } from "react-router-dom";

const Welcome = ({ name }) => {
  return <h1>Hello, {name}</h1>;
};

function App() {
  return (
    <>
      <Welcome name="React Developer" />
      <Link to="/UseState1">
        {" "}
        <p>UseState1</p>
      </Link>
    </>
  );
}

export default App;
