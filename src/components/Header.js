import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-light">
      <nav className="container navbar-expand">
        <div className="nav nav-pills">
          <NavLink
            className="nav-item nav-link active"
            to="/"
            activeClassName="active"
            exact
          >
            Home
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            to="/profile"
            activeClassName="active"
          >
            Profile
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            to="/about"
            activeClassName="active"
          >
            About
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
