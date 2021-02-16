import React, { useState, useEffect } from "react";
// by default -> useEffect runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("call useEffect");
    document.title = `New Messages(${count})`;
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
