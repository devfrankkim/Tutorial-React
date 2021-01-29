import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { book as data } from "./tutorials/Books";
import Book from "./tutorials/Book";
import { greeting } from "./testing/testing";
console.log(greeting);

function BookList() {
  return (
    <section className="booklist">
      {data.map((book, index) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
