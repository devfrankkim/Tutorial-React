import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState);
  // console.log(useState());
  // console.log(useState("hello"));
  //  [undefined, ƒ] >> [0] - state value / [1] - Function that controls the value
  // why [undefined?] > when we invoke useState, we need to pass in default value
  // this can be a number, string, array, object, boolean whatever JavaScript value I want.
  // useState returns an array, we can assign it to a variable.
  // const value = useState("passing value");
  // console.log("value:", value);
  // console.log(value[0]);
  // console.log(useState("passing value")[0]);
  // console.log(useState("passing value")[1]); // this handler function controls the value[0] in the state.

  const [text, setText] = useState("change value or passing value");

  const handleClick = (text) => {
    //   if (text !== "Change value") {
    //     setText("Change value");
    //   } else {
    //     setText("passing Value");
    //   }

    // text = text === "passing Value" ? "change value" : "passing value"; ONCE (spelling > loop)
    // text = text === "passing Value" ? "change value" : "passing Value"; // Good
    // text !== "change value" ? setText("change value"): setText("passing value");
    text = text !== "change value" ? "change value" : "passing value"; // Good
    setText(text);
  };

  return (
    <>
      <h2>useState basic example</h2>
      <h1>{text} </h1>
      <button onClick={() => handleClick(text)}> Button </button>
    </>
  );
};

export default UseStateBasics;
