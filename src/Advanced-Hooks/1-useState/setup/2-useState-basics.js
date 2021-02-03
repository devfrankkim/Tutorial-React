import React, { useState } from "react";

// useState is just a function
// useState returns two items in array [undefined, fn]

const UseStateBasics = () => {
  // console.log(useState);
  // const value = useState("hello")[0];
  // const fn = useState("hello")[1];
  // console.log(value);
  // console.log(fn);

  // Array destructuring
  const [text, setText] = useState("Random Title");

  const handleClick = () => {
    text === "Random Title"
      ? setText("Setting new title")
      : setText("Random Title");
  };
  return (
    <>
      <h2>{text}</h2>
      <button onClick={handleClick} className="btn">
        Click Me
      </button>
    </>
  );
};

export default UseStateBasics;
