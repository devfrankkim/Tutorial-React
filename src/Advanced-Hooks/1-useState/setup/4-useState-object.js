import React, { useState } from "react";

// use spread operator because setState function is going to wipe out the whole Object
const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "frank",
    age: 24,
    message: "hey frank smile",
  });
  const addJobTitle = () => {
    setPerson({ ...person, job: "software developer" });
  };
  console.log(person);
  return (
    <>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>{person.message}</h4>
      <h4>{person.job}</h4>
      <h4>{"Hello"}</h4>
      <button className="btn" onClick={addJobTitle}>
        Add job title
      </button>
    </>
  );
};

export default UseStateObject;
