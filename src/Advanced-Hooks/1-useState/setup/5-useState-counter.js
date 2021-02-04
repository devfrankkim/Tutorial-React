import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };
  /* 
    So essentially we're not using the current value in a state because what should happen is each and every time we click, 
    we grab that previous value that was just right there before. And then we update.
  */
  // const complexIncrease = () => setTimeout(() => {
  //  previous(initialized) value ---> fixed value
  //  setValue(value + 1);
  // }, 2000);

  const complexIncrease = () => {
    setTimeout(() => {
      /*
        current value(updated value) ---> flexible value
         Now, what's really interesting about this function that as a parameter, it gets that old state value, right before update.
         Now, what is really, really important that it gets that current one.
      */
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <div>
        <section style={{ margin: "4rem 0" }}>
          <h2>Regular number</h2>
          <h1>{value}</h1>
          <button className="btn" onClick={() => setValue(value - 1)}>
            Decrease
          </button>
          <button className="btn" onClick={reset}>
            Reset
          </button>
          <button className="btn" onClick={() => setValue(value + 1)}>
            Increase
          </button>
        </section>
      </div>
      <div>
        <section style={{ margin: "4rem 0" }}>
          <h2>More Complex Counter</h2>
          <h1>{value}</h1>
          <button className="btn" onClick={complexIncrease}>
            Increase later
          </button>
        </section>
      </div>
    </>
  );
};

export default UseStateCounter;
