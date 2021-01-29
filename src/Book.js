import React from "react";

const Book = ({ img, title, author }) => {
  // So what do we need in order to set up an event in react?
  // 1) attribute , 2) eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

export default Book;
