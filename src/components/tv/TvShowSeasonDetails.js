import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TvShowEpisodeCards from "./TvShowEpisodeCards";
import useGetTvShowSeasonDetails from "../../hooks/useGetTvShowSeasonDetails";
import { removeTvShowSeasonDetails } from "../../store/tvSlice";

const TvShowSeasonDetails = ({ tvShowId,closeOverlay }) => {
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
    <div className="absolute z-10 w-[70%] h-screen left-[15%] px-6 py-6 bg-black" onClick={()=>closeOverlay()}>
      <div className="fixed overflow-scroll w-screen h-screen"> 
        <h1 className="text-xl font-extrabold pl-14 pb-2">Season1</h1>
        {episodes.map((episode) => (
          <TvShowEpisodeCards key={episode.episode_number} episode={episode} />
        ))}
      </div>
    </div>
  );
};

export default TvShowSeasonDetails;
