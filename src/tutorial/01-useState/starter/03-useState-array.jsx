import { data } from "../../../data";

import React, {useState} from "react";
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  return (
  <div>
    {people.map((person) =>{
      const {id, name} = person;
      // console.log(person);
      return <div key={id}>
        <h4>{name}</h4>
      </div>
    })}
  </div>
  );
};

export default UseStateArray;
