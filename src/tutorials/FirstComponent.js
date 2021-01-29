// index.js ----> JavaScript entry point
import React from "react"; // JS ES6 modules -> import react -> To create React components
import ReactDom from "react-dom";

// This is a COMPONENT.  JS syntax
// Stateless functional component -> No states
// Always return JSX

// function Greeting() {
//   // JSX
//   return <h1>hello world</h1>;
// }

// const Greeting = () => {
//   // (what element to return, props object, children)
//   return React.createElement("h1", {}, "hello world");
// };

function GreetingH1() {
  return (
    <div>
      <h1>Hello H1</h1>
    </div>
  );
}

const GreetingH1 = () => {
  // (what element to return, props object, children)
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello H1")
  );
};

// Dom has the render method, so we go with React Dom, then Dot and then we type here under.
// (what to render) , (where to render)
// ReactDom.render(<GreetingH1 />, document.getElementById("root"));
