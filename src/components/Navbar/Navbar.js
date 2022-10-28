import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
import Logo from "../../images/pokemon-logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="nav__logo">
        <Link to="/">
          <p>USER DATABASE</p>
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
