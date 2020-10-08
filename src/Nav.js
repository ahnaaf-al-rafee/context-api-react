import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

import "./Nav.css";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div className="nav">
      <h3>Ahnaaf Al Rafee</h3>
      <p>List of Movies: {movies.length}</p>
    </div>
  );
};

export default Nav;
