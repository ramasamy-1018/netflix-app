import React from "react";
import { useNavigate } from "react-router-dom";
import { IMAGE_CDN_URL } from "../../utils/constants";

const MovieCard = ({movieId,poster}) => {

  const navigate = useNavigate();

  if(!poster) return null

  const handleClick = (movieId) => {
    navigate(`/movie/${movieId}`)
  }

  return (
    <div className="w-48 mr-3 overflow-hidden" onClick={() => handleClick(movieId)}>
      <img className="hover:scale-105 hover:cursor-pointer" src={IMAGE_CDN_URL + poster} />
    </div>
  );
};

export default MovieCard;
