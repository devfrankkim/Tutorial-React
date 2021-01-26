// Set up JavaScript in JSX
import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}
const author = "Frank Kim";

const Book = () => {
  const title = "Brown Bear, Brown Bear, What Do You See?";
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51430n+9jlL._SX355_BO1,204,203,200_.jpg"
        alt=""
      />
      <h1>{title}</h1>
      <h4 style={{ color: "#617d98", fontSize: "0.725rem", marginTop: "" }}>
        {author.toUpperCase()}
      </h4>
      {/* JSX always needs to return value */}
      {/* <p>{let  x = 6}</p> */}
      <p>{`$${100 + 100}`}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
