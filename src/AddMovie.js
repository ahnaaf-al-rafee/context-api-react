import React, { useContext, useState } from "react";

import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [movies, setMovies] = useContext(MovieContext);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addMovie = (event) => {
    event.preventDefault();

    setMovies((previousMovies) => [
      ...previousMovies,
      { name: name, price: price },
    ]);

    setName("");
    setPrice("");
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          name="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <button type="submit" onClick={addMovie}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
