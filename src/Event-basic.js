import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/51430n+9jlL._SX355_BO1,204,203,200_.jpg",
    title: "Brown Bear, Brown Bear, What Do You See?",
    author: "Frank Kim",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/51wfzW0QnXL._SX355_BO1,204,203,200_.jpg",
    title: "Chicka Chicka Boom Boom",
    author: "Frank",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/51wfzW0QnXL._SX355_BO1,204,203,200_.jpg",
    title: "Chicka Chicka Boom Boom",
    author: "Kim",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        console.log(book);
        return (
          <>
            <Book key={book.id} {...book}></Book>
            <Test test={book}></Test>
            <Test1 {...book}>TEST!</Test1>
            {/* <Test1 test1={...book}></Test1> spreading properities > can't name them in one name */}
          </>
        );
      })}
    </section>
  );
}

// const Test = ({ author, id, img, title }, props) => {
const Test = (props) => {
  console.log(props);
  console.log(props.test);
  // console.log(author, id, img, title);
  // console.log(props);
  return <h1> TEST </h1>;
};

const Test1 = (props) => {
  console.log(props);
  console.log("Test1");
  // console.log(props);
  // console.log(author, id, img, title);
  // console.log(props);
  return <h1> TEST </h1>;
};

/*

just so you can see whichever makes more sense to you, so we can set it up as a reference
or we can set it up as a inline function.
- How we would set up as a reference? -> Well, in here I could come up with a function.

*/

const Book = ({ img, title, author }, book) => {
  // console.log(book);
  // console.log(img, title, author);
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

// ReactDom.render(<BookList />, document.getElementById("root"));
export default BookList;

/*
<button type="button" onClick={complexExample(author)}>
I invoke at the moment I run my application and that is now what I'm looking for.
*/

/*
<button type="button" onClick={() => complexExample(author)}>

we need to understand that once we start up the application, 
we run our function, ----->   () =>
we return the complex example -----> complexExample(author)
Once we click it ----> onClick
then we invoke the function  ------> complexExample(author)
*/

/*
const clickHandler = (e) => {
  console.log(e);
  console.log(e.target);
};

in all the functions, in all our event handlers, we can access the event object.
*/
