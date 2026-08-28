import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container home-page">
      <h1>Library Management System</h1>
      <p>A simple system to manage books and members.</p>

      <div className="home-buttons">
        <Link to="/books">
          <button>Go to Books</button>
        </Link>
        <Link to="/members">
          <button>Go to Members</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
