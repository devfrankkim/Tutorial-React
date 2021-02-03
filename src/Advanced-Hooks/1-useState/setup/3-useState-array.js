import React from "react";
import { data } from "../../../data";

// make sure the functions don't run right away. They have to run only when it invokes --> use arrow functions
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    // filter -> that's not matching the id -> return the datas
    let saveData = people.filter((person) => person.id !== id);
    setPeople(saveData);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear Items
      </button>
    </>
  );
};

export default UseStateArray;
