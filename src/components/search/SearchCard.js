import React from "react";
import { IMAGE_CDN_URL } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import useGetGenres from "../../hooks/useGetGenres"
import Shimmer from "../../utils/Shimmer"

const SearchCard = ({ item }) => {
  const navigate = useNavigate();
  const { id, backdrop_path, overview, genre_ids, title,release_date } = item;
  const genres = useGetGenres(genre_ids)

  if (!item) return null;

  if (!(id && backdrop_path && overview && title && genre_ids && release_date)) return null;
  if(!genres) return (<Shimmer />)


  const handleClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div
      className="flex justify-center items-center w-[60%] h-56 rounded-lg bg-slate-200 text-black mb-4 ml-[20%] p-2 hover:cursor-pointer"
      onClick={() => handleClick(id)}
    >
      <img className="xl:w-[25%] lg:w-[40%] md:w-[45%] sm:w-[45%] w-[50%] xl:h-32 lg:h-32 md:h-32 sm:h-20 h-20 p-2 pr-6" src={IMAGE_CDN_URL + backdrop_path} />
      <div className=" w-[70%]">
        <p className="text-md font-bold pb-2">
          {title} ({release_date?.split("-")[0]})
        </p>
        <p className="text-md font-light pb-2 hidden xl:block lg:block">{overview.split(".")[0]}.{overview.split(".")[1]}.</p>
        <p className="text-md font-bold">{genres.join(" | ")}</p>

      </div>
    </div>
  );
};

export default SearchCard;
