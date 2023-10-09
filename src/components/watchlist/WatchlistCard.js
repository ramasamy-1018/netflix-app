import React from "react";
import { IMAGE_CDN_URL } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import { useDispatch } from "react-redux";
import { removeFromWatchList } from "../../store/watchlistSlice";

const WatchlistCard = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!item) return null;
  const { id, backdrop_path, releaseYear, genres, overview, title, stream } =
    item;

  const handleClick = () => {
    dispatch(removeFromWatchList(id));
  };

  return (
    <div className="flex items-center w-full bg-slate-200 xl:h-44 lg:h-44 md:h-40 h-32 mt-6 rounded-lg text-black hover:bg-slate-300 hover:cursor-pointer">
      <div
        className="flex justify-center items-center w-[95%]"
        onClick={() => navigate(`/${stream}/${id}`)}
      >
        <img
          className="xl:w-[25%] lg:w-[40%] md:w-[45%] sm:w-[45%] w-[50%] xl:h-32 lg:h-32 md:h-32 sm:h-20 h-20 p-2 pr-6"
          src={IMAGE_CDN_URL + backdrop_path}
        />
        <div className=" w-[70%]">
          <p className="text-md font-bold pb-2">
            {title} ({releaseYear})
          </p>
          <p className="text-md font-light pb-2 hidden xl:block lg:block">
            {overview.split(".")[0]}.{overview.split(".")[1]}.
          </p>
          <p className="text-md font-bold">{genres.join(" | ")}</p>
        </div>
      </div>
      <IonIcon
        className="w-[5%] h-6 hover:cursor-pointer hover:scale-105"
        s
        onClick={handleClick}
        icon={closeOutline}
      />
    </div>
  );
};

export default WatchlistCard;
