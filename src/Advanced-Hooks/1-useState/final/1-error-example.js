import React from "react";

const ErrorExample = () => {
  let title = "Title";
  const handleClick = () => {
    title = "changed title";
    console.log(title);
    // Why: Not rendering the component, Not keeping the values
    // How: keep the values between renders, trigger the rerender
    // resolution: Use useState
  };
  return (
    <>
      <h1>{title}</h1>
      <h2>useState error example</h2>
      <button onClick={() => handleClick()}>Click me</button>
    </>
  );
};

export default ErrorExample;
