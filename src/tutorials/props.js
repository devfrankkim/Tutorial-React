import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// setup variables (object)
const firstBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/51430n+9jlL._SX355_BO1,204,203,200_.jpg",
  title: "Brown Bear, Brown Bear, What Do You See?",
  author: "Frank Kim",
};

const secondBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/51wfzW0QnXL._AC_SX184_.jpg",
  title: "Chicka Chicka Boom Boom",
  author: "Frank Kim",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        job="developer"
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        job="developer"
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

// We get the same instance and everything is beautiful, but the values don't change while a book is a function
const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4 style={{ color: "#617d98", fontSize: "1rem", marginTop: "" }}>
        {`Author: ${props.author.toUpperCase()}`}
      </h4>
      <p>{`Job: ${props.job}`}</p>
      <p style={{ color: "blue" }}>{`Title: ${props.title}`}</p>
      <p>{props.number}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
