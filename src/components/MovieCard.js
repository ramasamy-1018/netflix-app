import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({poster}) => {
  return (
    <div className="w-48 mr-2">
      <img src={IMAGE_CDN_URL + poster} />
    </div>
  );
};

export default MovieCard;
