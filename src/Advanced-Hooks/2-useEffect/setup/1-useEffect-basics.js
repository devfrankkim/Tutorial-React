import React, { useState, useEffect } from "react";
// by default -> useEffect runs after every re-render
// cleanup function
// no conditions for useEffect unless using it inside useEffect

// second parameter, [] --> renders only once (initial render only)
// without second parameter, it will run
// by default, if you have no dependency or the user effect will run each and every time the component gets rendered

const UseEffectBasics = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("call useEffect");
    if (count > 0) {
      document.title = `New Messages(${count})`;
    }
    console.log("document");
  }, [count]);

  useEffect(() => {
    console.log("second useEffect"); // renders only for initial render but second one will not run
  }, []);

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
