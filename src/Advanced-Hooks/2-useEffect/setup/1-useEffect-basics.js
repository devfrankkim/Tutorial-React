import React, { useState, useEffect } from "react";
// by default -> useEffect runs after every re-render
// cleanup function
// second parameter
// no conditions for useEffect unless using it inside useEffect
const UseEffectBasics = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("call useEffect");
    if (count > 0) {
      document.title = `New Messages(${count})`;
    }
    console.log("document");
  });
  console.log("render component");
  return (
    <>
      <h2>useEffect Basics</h2>
      <h1>{count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
