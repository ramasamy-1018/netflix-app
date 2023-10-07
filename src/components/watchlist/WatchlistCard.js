import React from "react";
import {IMAGE_CDN_URL} from "../../utils/constants"
import { useNavigate } from "react-router-dom";

const WatchlistCard = ({item}) => {

  const navigate = useNavigate();
  if(!item) return null;
  const {id,backdrop_path,releaseYear,genres,overview,title,stream} = item;

  return (
    <div
      className="flex justify-center items-center w-[80%] h-44 rounded-lg bg-slate-200 text-black mt-6 ml-32 p-2 hover:cursor-pointer"
      onClick={() => navigate(`/${stream}/${id}`)}>
      <img className="w-[25%] h-32 pr-6" src={IMAGE_CDN_URL + backdrop_path} />
      <div className=" w-[70%]">
        <p className="text-md font-bold pb-2">{title} ({releaseYear})</p>
        <p className="text-md font-light pb-2">{overview.split(".")[0]}.{overview.split(".")[1]}.{overview.split(".")[2]}.</p>
        <p className="text-md font-bold">{genres.join(" | ")}</p>
      </div>
    </div>
  );
};

export default WatchlistCard;
