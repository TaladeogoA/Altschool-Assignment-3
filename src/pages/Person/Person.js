import React from "react";
import { useParams } from "react-router-dom";

const Person = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Person {id}</h1>
    </div>
  );
};

export default Person;
