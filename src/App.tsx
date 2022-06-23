import React, { useState, useEffect } from "react";
import "./index.scss";
import { Add } from "./utils/Add";
import { Dec } from "./utils/Dec";

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchMovies = async () => {
    const res = await fetch("https://api.tvmaze.com/shows?page=1");
    const r = await res.json();

    const listOfFetchedMovies = r.map((obj: any) => {
      return obj.image.medium;
    });

    setMovies(listOfFetchedMovies);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="titleDiv">
        <div className="titleText">Movie Place</div>
      </div>
      <div className="posterDiv">
        <img
          className="posterDiv--poster"
          src={movies[index]}
          alt="movie poster"
        />
        <div className="posterDiv--buttons">
          <button
            className="posterDiv--buttons--btn"
            onClick={() => {
              setIndex(Dec(index));
            }}
          >
            -1
          </button>
          <button
            className="posterDiv--buttons--btn"
            onClick={() => {
              setIndex(Add(index, movies));
            }}
          >
            +1
          </button>
        </div>
      </div>
    </div>
  );
};
