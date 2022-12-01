import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching Data
  const fetchPeople = async () => {
    const response = await fetch("https://randomuser.me/api/?results=50");
    const data = await response.json();
    localStorage.setItem("people", JSON.stringify(data.results));
    // console.log(data.results);
    setPeople(data.results);
  };

  useEffect(() => {
    if (localStorage.getItem("people") === null) {
      fetchPeople();
      console.log("fetching from api");
    } else {
      setPeople(JSON.parse(localStorage.getItem("people")));
      console.log("fetching from local storage");
    }
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
    <section className="hero-bg">
      <div className="hero">
        <h1 className="hero__title">Showing all {people.length} people</h1>
      </div>

      <div className="cards">
        {currentPeople.map((people) => {
          return (
            <div className="card" key={people?.login?.uuid}>
              <div className="card__image">
                <img src={people.picture.large} alt={people.name.first} />
              </div>

              <div className="card__content">
                <h3>{`${people?.name?.title} 
                  ${people?.name?.first} ${people?.name?.last}
                `}</h3>

                <p>{people?.email}</p>
              </div>

              <div className="card-button">
                <Link to={`/${people?.login?.uuid}`}>
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
    </section>
  );
};

export default Home;
