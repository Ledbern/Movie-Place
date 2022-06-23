import React from "react";

interface props {
  source: string;
}

export const Poster = ({ source }: props) => {
  return (
    <div className="posterDiv">
      <img className="posterDiv--poster" src={source} alt="movie poster" />
    </div>
  );
};
