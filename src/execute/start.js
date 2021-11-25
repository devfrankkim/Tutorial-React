import React from "react";

const OutsideVariable = "This works! Good job!";
const firstBook = {
  img: "https://www.amazon.ca/Feynman-Lectures-Physics-boxed-set/dp/0465023827?ref_=Oct_d_obs_d_15305971&pd_rd_w=dQtti&pf_rd_p=886d55ac-d17c-4912-a5af-948a0d840eec&pf_rd_r=R9DZKVD22DWPVN3C9Q2J&pd_rd_r=8d3494c2-9d18-4521-ac10-9896a99fc00d&pd_rd_wg=2Hwxg&pd_rd_i=0465023827",
  source: "REACT",
  name: "Frank Kim",
};
function BookList() {
  return (
    <>
      <section>
        <Image />
        {/* 렌더 되는게 컴포넌트 리턴이라서 > props 로 전달해야한다. */}
        {/* Because what's getting rendered is the component return. You can pass it as a props */}
        <Book className="book" />
        <Image />
        <PropsExample
          job="developer"
          style={{ color: "red" }}
          className={"book"}
        />
        <PropsExample
          rich="yes"
          img={firstBook.img}
          source={firstBook.source}
          name={firstBook.name}
        />
        <Image />
      </section>
    </>
  );
}

const PropsExample = (props) => {
  console.log(props);
  // console.log(props);
  // console.log(props.firstBook.img);
  return (
    <>
      <h1> {props.name ? props.name : ""} </h1>
      <h1>{props.source}</h1>
      <h1>{props.job} </h1>
      {/* <h1>{props.rich ? `Rich : ${props.rich}` : ""} </h1> */}
      <h1> Rich: {props.rich ? props.rich : ""} </h1>
    </>
  );
};

const Book = () => {
  return (
    <>
      <h1>{OutsideVariable}</h1>
      <article> this is a book </article>
      <article> this is a book </article>
      <article> this is a book </article>
      <h1>{OutsideVariable.toUpperCase()}</h1>
      <h2>{9 + 20}</h2>
    </>
  );
};

const Image = () => {
  return (
    <img src="https://m.media-amazon.com/images/I/7109vuubmJS._AC_UL320_.jpg" />
  );
};

const Title = () => <h1> Title </h1>;

export default BookList;
