import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import movie from "../../assets/images/movie.webp";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      <img src={movie} className="movieImage" />
      <p>MOVIES</p>
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        Home
      </Link>
      <Link
        to="/trending"
        className={location.pathname === "/trending" ? "active" : ""}
      >
        Trending
      </Link>
      <Link
        to="/blog"
        className={location.pathname === "/blog" ? "active" : ""}
      >
        Blog
      </Link>
      <Link
        to="/about"
        className={location.pathname === "/about" ? "active" : ""}
      >
        About
      </Link>
      <Link
        to="/contact"
        className={location.pathname === "/contact" ? "active" : ""}
      >
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
