import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51430n+9jlL._SX355_BO1,204,203,200_.jpg",
    title: "Brown Bear, Brown Bear, What Do You See?",
    author: "Frank Kim",
  },
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51wfzW0QnXL._SX355_BO1,204,203,200_.jpg",
    title: "Chicka Chicka Boom Boom",
    author: "Frank",
  },
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51wfzW0QnXL._SX355_BO1,204,203,200_.jpg",
    title: "Chicka Chicka Boom Boom",
    author: "Kim",
  },
];

// const names = ["frank", "kim", "lee"];
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>;
// });

// console.log(newNames);

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book book={book}></Book>;
      })}
    </section>
  );
}
const Book = (props) => {
  console.log(props);
  const { img, title, author } = props.book;
  return (
    <article>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
