import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TvShowEpisodeCards from "./TvShowEpisodeCards";
import useGetTvShowSeasonDetails from "../../hooks/useGetTvShowSeasonDetails";
import { removeTvShowSeasonDetails } from "../../store/tvSlice";
import { IonIcon } from "@ionic/react";
import { closeOutline } from "ionicons/icons";

const TvShowSeasonDetails = ({ tvShowId, closeOverlay }) => {
  useGetTvShowSeasonDetails(tvShowId);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(removeTvShowSeasonDetails());
    };
  }, []);

  const episodes = useSelector((store) => store.tv.tvShowSeasonDetails);

  if (!episodes) return null;

  return (
    <div className="absolute z-10 w-[70%] h-screen xl:left-80 lg:left-56 md:left-48 sm:left-44 left-28 py-6 bg-black">
      <div className="fixed overflow-scroll w-screen h-screen">
        <div className="flex w-[65%] mx-10 pb-2 justify-between items-center">
          <h1 className="text-xl font-extrabold">Season1</h1>
          <IonIcon
            className="w-6 h-6 hover:cursor-pointer"
s            onClick={closeOverlay}
            icon={closeOutline}
          />
        </div>
        {episodes.map((episode) => (
          <TvShowEpisodeCards key={episode.episode_number} episode={episode} />
        ))}
      </div>
    </div>
  );
};

export default TvShowSeasonDetails;
