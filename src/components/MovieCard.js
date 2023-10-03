import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const MovieCard = ({movieId,poster}) => {

  const navigate = useNavigate();

  if(!poster) return null

  const handleClick = (movieId) => {
    navigate(`/movie/${movieId}`)
  }

  return (
    <div className="w-48 mr-2" onClick={() => handleClick(movieId)}>
      <img src={IMAGE_CDN_URL + poster} />
    </div>
  );
};

export default MovieCard;
