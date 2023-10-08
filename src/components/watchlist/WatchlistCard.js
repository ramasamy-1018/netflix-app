import React from "react";
import { IMAGE_CDN_URL } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const WatchlistCard = ({ item }) => {
  const navigate = useNavigate();
  if (!item) return null;
  const { id, backdrop_path, releaseYear, genres, overview, title, stream } =
    item;

  return (
      <div
        className="flex justify-center items-center w-full h-44 mt-4 rounded-lg bg-slate-200 text-black hover:cursor-pointer"
        onClick={() => navigate(`/${stream}/${id}`)}
      >
        <img
          className="w-[25%] xl:h-32 lg:h-32 md:h-32 sm:h-20 h-20 pr-6"
          src={IMAGE_CDN_URL + backdrop_path}
        />
        <div className=" w-[70%]">
          <p className="text-md font-bold pb-2">
            {title} ({releaseYear})
          </p>
          <p className="text-md font-light pb-2 hidden sm:block md:block">
            {overview.split(".")[0]}.{overview.split(".")[1]}.
          </p>
          <p className="text-md font-bold">{genres.join(" | ")}</p>
        </div>
      </div>
  );
};

export default WatchlistCard;
