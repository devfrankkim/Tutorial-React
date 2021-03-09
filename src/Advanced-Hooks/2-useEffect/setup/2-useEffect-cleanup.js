import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth); // triggering re-rendering
    console.log("resizing");
  };
  useEffect(() => {
    console.log("useEffect start"); //2
    window.addEventListener("resize", checkSize); // 3
    // WEB API (Mounted)
    // --->

    return () => {
      // invoke once we exit.
      console.log("clean up");
      // window.removeEventListener("resize", checkSize);
    };
  });
  console.log("render"); // 1
  return (
    <>
      <h2>useEffect cleanup</h2>
      <h3>{size}PX</h3>
    </>
  );
};

export default UseEffectCleanup;

// first render -> useEffect -> resize -> first render -> clean up
// useEffect -> resize -> first render -> resize -> clean up
