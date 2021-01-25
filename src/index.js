import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Authour />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/51430n+9jlL._SX355_BO1,204,203,200_.jpg"
      alt=""
    />
  );
};
const Title = () => <h1>Brown Bear, Brown Bear, What Do You See?</h1>;
const Authour = () => <h1>Frank</h1>;

ReactDom.render(<BookList />, document.getElementById("root"));
