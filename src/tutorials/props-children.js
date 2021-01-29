import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const firstBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/51430n+9jlL._SX355_BO1,204,203,200_.jpg",
  title: "Brown Bear, Brown Bear, What Do You See?",
  author: "Frank Kim",
};

const secondBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/51wfzW0QnXL._SX355_BO1,204,203,200_.jpg",
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
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          sapiente blanditiis velit repudiandae iure perferendis corporis
          assumenda impedit, delectus praesentium pariatur dolore voluptatem
          quisquam, rem odio et eius ea hic.
        </p>
      </Book>
      <Book
        job="developer"
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

// Now, the children props are on the props object. I can tell you right away that it is there.
// the name is very special

const Book = (props) => {
  const { img, title, author, job, number, children } = props;
  console.log(props);
  //   console.log(children);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      {props.children}
      <h4 style={{ color: "#617d98", fontSize: "1rem", marginTop: "1rem" }}>
        {`Author: ${author.toUpperCase()}`}
      </h4>
      <p>{`Job: ${job}`}</p>
      <p style={{ color: "blue" }}>{`Title: ${title}`}</p>
      <p>{number}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
