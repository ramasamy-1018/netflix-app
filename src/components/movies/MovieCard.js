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
    <div className="w-40 mr-2 overflow-hidden" onClick={() => handleClick(movieId)}>
      <img className="hover:scale-110" src={IMAGE_CDN_URL + poster} />
    </div>
  );
};

export default MovieCard;
