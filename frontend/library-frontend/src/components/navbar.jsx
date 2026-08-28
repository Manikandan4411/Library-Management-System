import React from "react";
import { NavLink  } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <h2 className="navbar-title">Library Management</h2>
        
        <ul className="navbar-links">
          <li><NavLink  to="/">Home</NavLink ></li>
          <li><NavLink  to="/books">Books</NavLink ></li>
          <li><NavLink  to="/members">Members</NavLink ></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
