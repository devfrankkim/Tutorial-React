import React from "react";

const ErrorExample = () => {
  let title = "changing title now";
  const clickMe = () => {
    title = "yes baby";
    console.log(title);
  };

  return (
    <>
      <h2>useState error example</h2>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={clickMe}>
        change title
      </button>
    </>
  );
};

export default ErrorExample;
