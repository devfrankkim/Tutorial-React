import React from "react";
import ReactDom from "react-dom";

// Always have to return single element
// We are still rendering HTML (semantics)
// div / section / article
// <React.Fragment/> <></>
// HTML Attribute -> Use CamelCase
// className instead of class
// closing every element
// formatting return()

function Greeting() {
  return (
    <div onClick>
      <section>
        <article>
          <h1>Hello People</h1>
          <ul>
            <li>
              <a href="#">hello </a>
            </li>
            <img src="" alt="" />
          </ul>
        </article>
        <div></div>
      </section>
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
