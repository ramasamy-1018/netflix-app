import React from "react";
import { IMAGE_CDN_URL } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const SearchCard = ({ item }) => {
  const navigate = useNavigate();

  if (!item) return null;

  const { id, backdrop_path, overview, title, release_date } = item;
  if (!(id && backdrop_path && overview && title && release_date)) return null;


  const handleClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div
      className="flex justify-center items-center w-[60%] h-56 rounded-lg bg-slate-200 text-black mb-4 ml-[20%] p-2 hover:cursor-pointer"
      onClick={() => handleClick(id)}
    >
      <img className="w-[25%] h-32 pr-6" src={IMAGE_CDN_URL + backdrop_path} />
      <div className=" w-[70%]">
        <p className="text-md font-bold pb-2">
          {title} ({release_date?.split("-")[0]})
        </p>
        <p className="text-md font-light pb-2">{overview.split(".")[0]}.{overview.split(".")[1]}.{overview.split(".")[2]}.</p>
      </div>
    </div>
  );
};

export default SearchCard;
