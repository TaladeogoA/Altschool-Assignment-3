import React from "react";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching Data
  const fetchPeople = async () => {
    const response = await fetch("https://randomuser.me/api/?results=50");
    const data = await response.json();
    console.log(data.results);
    setPeople(data.results);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [peoplePerPage] = useState(5);

  const indexOfLastPerson = currentPage * peoplePerPage;

  const indexOfFirstPerson = indexOfLastPerson - peoplePerPage;

  const currentPeople = people.slice(indexOfFirstPerson, indexOfLastPerson);

  const pageNumber = Math.ceil(people.length / peoplePerPage);

  const pageNumbers = [...Array(pageNumber + 1).keys()].slice(1);

  return (
    <section>
      <div className="hero">
        <h1 className="hero__title">Find a person</h1>
      </div>

      <div className="cards">
        {currentPeople.map((people) => {
          return (
            <div className="card" key={people.index}>
              <div className="card__image">
                <img src={people.picture.large} alt={people.name.first} />
              </div>
              <div className="card__content">
                <h3 className="card__title">{`
                  ${people.name.first} ${people.name.last}
                `}</h3>
              </div>

              <div className="card__footer">
                <Link to={`/person/${people.index}`}>
                  <button className="card__button">View Profile</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pagination">
        <button
          className={
            currentPage === 1
              ? "pagination__button disabled"
              : "pagination__button"
          }
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {pageNumbers.map((number) => {
          return (
            <button
              className={
                currentPage === number
                  ? "pagination__button active"
                  : "pagination__button"
              }
              key={number}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </button>
          );
        })}
        <button
          className={
            currentPage === pageNumbers.length
              ? "pagination__button disabled"
              : "pagination__button"
          }
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === pageNumbers.length}
        >
          Next
        </button>
      </div>

      <Outlet />
    </section>
  );
};

export default Home;
