import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Person.scss";

const Person = () => {
  const { personId } = useParams();
  const [person, setPerson] = useState(null);

  // filter person from existing data in local storage
  const fetchPerson = () => {
    const people = JSON.parse(localStorage.getItem("people"));
    // console.log(people);
    const person = people.filter((person) => person.login.uuid === personId);
    // console.log(person);
    setPerson(person[0]);
  };

  useEffect(() => {
    fetchPerson();
  }, []);

  return (
    <section className="person">
      <div className="person__image">
        <img
          src={person?.picture.large}
          alt={person?.name.first + " " + person?.name.last}
        />
      </div>

      <div className="person__content">
        <h3 className="person__name">{`${person?.name?.first} ${person?.name?.last}`}</h3>

        <p className="person__text">
          {person?.location?.street?.number} {person?.location?.street?.name},
          Location: {person?.location?.city}, {person?.location?.state},{" "}
          {person?.location?.country}
        </p>
        <p className="person__text">Email: {person?.email}</p>
        <p className="person__text">Phone: {person?.phone}</p>
        <p className="person__text">Mobile: {person?.cell}</p>
      </div>

      <div className="person__button">
        <Link to="/">
          <button className="person__button">Back</button>
        </Link>
      </div>
    </section>
  );
};

export default Person;
