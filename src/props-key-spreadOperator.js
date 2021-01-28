import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51430n+9jlL._SX355_BO1,204,203,200_.jpg",
    title: "Brown Bear, Brown Bear, What Do You See?",
    author: "Frank Kim",
  },
  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51wfzW0QnXL._SX355_BO1,204,203,200_.jpg",
    title: "Chicka Chicka Boom Boom",
    author: "Frank",
  },
  {
    id: 3,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51wfzW0QnXL._SX355_BO1,204,203,200_.jpg",
    title: "Chicka Chicka Boom Boom",
    author: "Kim",
  },
];

// - map(index) is changing as your array is changing. Not safe.
// - Spread Operator
// Passing as Separate properties
// I would like to spread out all the properties here that are coming from the book
// So instead of passing a book as an object and then accessing those properties one by one, I can say how many properties I have.
function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        // return <Book book={book}></Book>;
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

// - Spread Operator
// Passing as Separate properties
// I would like to spread out all the properties here that are coming from the book
const Book = ({ img, title, author }) => {
  // console.log(props);
  // const { img, title, author } = props;
  return (
    <article>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
