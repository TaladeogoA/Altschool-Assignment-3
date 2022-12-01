import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="nav__logo">
        <Link to="/">
          <h1>USER DATABASE</h1>
        </Link>
      </div>

      <ul className="nav__menu">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
