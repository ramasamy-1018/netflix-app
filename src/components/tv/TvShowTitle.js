import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMAGE_CDN_URL } from "../../utils/constants";
import { IonIcon } from "@ionic/react";
import { add, play,checkmark } from "ionicons/icons";
import TvShowSeasonDetails from "./TvShowSeasonDetails";
import { ShowCastDetails } from "../../store/tvSlice";
import { addToWatchlist, removeFromWatchList } from "../../store/watchlistSlice";
import Shimmer from "../../utils/Shimmer";

const TvShowTitle = ({ showTitle }) => {
  const [inWatchList, setInWatchList] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getDetails();
  },[]);

  const watchList = useSelector((store) => store.watchlist.watchlistArray);
  if(!watchList) return <Shimmer />

  const getDetails = () => {
    const presentInWatchList = watchList?.filter((item) => { return item.id == showTitle.id});
    const setValue = presentInWatchList.length ? true : false
    setInWatchList(setValue);
  };

  const handleWatchListClick = () => {
    setInWatchList(!inWatchList);
    !inWatchList ? dispatch(addToWatchlist(showTitle)) : dispatch(removeFromWatchList(showTitle.id));
  };

  const handleWatchNowClick = () => {
    setShowOverlay(true);
    dispatch(ShowCastDetails(false));
  };

  const closeOverlay = () => {
    setShowOverlay(false);
    dispatch(ShowCastDetails(true));
  };

  return (
    <div className="absolute w-[100%] text-white flex flex-col bg-gradient-to-r from-black bg-opacity-60 justify-center">
      <div className="relative xl:w-[30%] lg:w-[34%] md:w-[40%] sm:w-[55%] w-[65%] left-20 h-screen flex justify-center flex-col animated-scale">
        {showTitle.logo ? (
          <img className="h-24" src={IMAGE_CDN_URL + showTitle.logo} />
        ) : (
          <h1 className="text-5xl font-extrabold pt-5">{showTitle.title}</h1>
        )}
        <h1 className="text-2xl font-extrabold pt-5">
          {showTitle.releaseYear} • {showTitle.seasons} • {showTitle.episodes}{" "}
        </h1>
        <h2 className="text-lg font-medium pt-7 hidden md:block sm:block">
        {showTitle.overview.split(".")[0]}.{showTitle.overview.split(".")[1]}.{showTitle.overview.split(".")[2]}.{showTitle.overview.split(".")[3]}.
        </h2>
        <h2 className="text-2xl font-extrabold pt-7">
          {showTitle.genres.join(" | ")}
        </h2>
        <div className="flex pt-10">
          <button
            className="bg-gray-500 flex text-2xl font-bold w-5/6 h-16 bg-opacity-50 rounded-lg justify-center items-center hover:bg-gray-600"
            onClick={handleWatchNowClick}
          >
            <IonIcon className="pr-4" icon={play} /> Watch Season 1
          </button>
          <button
            className="bg-gray-500 ml-2 w-1/6 h-16 text-3xl font-extraboldbold bg-opacity-50 rounded-lg flex justify-center items-center hover:bg-gray-600"
            onClick={handleWatchListClick}
          >
            <IonIcon icon={inWatchList ? checkmark : add} />
          </button>
        </div>
      </div>
      {showOverlay && (
        <TvShowSeasonDetails tvShowId={showTitle.id} closeOverlay={closeOverlay} />
      )}
    </div>
  );
};

export default TvShowTitle;
