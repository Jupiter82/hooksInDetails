import { useState } from "react";
import { Link } from "react-router-dom";

const Welcome = ({ name }) => {
  return <h1>Hello, {name}</h1>;
};

function App() {
  return (
    <>
      <Welcome name="React Developer" />
      <div style={{ display: "flex", gap: "5px" }}>
        <Link to="/UseState1">
          {" "}
          <p>UseState1</p>
        </Link>
        <Link to="/UseState2">
          {" "}
          <p>UseState2</p>
        </Link>
      </div>
    </>
  );
}

export default App;
