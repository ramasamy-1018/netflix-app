import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  removeSecondaryTvShowVideoTrailer,
  removeSecondaryTvShowVideoDetails,
} from "../../store/tvSlice";
import { IMAGE_CDN_URL } from "../../utils/constants";
import Shimmer from "../../utils/Shimmer";
import SideBar from "../SideBar";
import TvShowTitle from "./TvShowTitle";
import useGetAllTvShowDetails from "../../hooks/useGetAllTvShowDetails"

const TvShowTrailer = ({ message,tvShowId }) => {
  const dispatch = useDispatch();
  const {playVideo,showTitle} = useGetAllTvShowDetails(message,tvShowId)

  useEffect(() => {
    return () => {
      dispatch(removeSecondaryTvShowVideoTrailer());
      dispatch(removeSecondaryTvShowVideoDetails());
    };
  }, []);

  if(!playVideo && !showTitle) return (<Shimmer />)

  return (
    <div>
      <SideBar showMovies={true} ShowTv={true} />
      {playVideo ? (
        <div className="absolute h-screen w-full aspect-video bg-gray-400">
          <iframe
            className="w-[100%] h-screen transform scale-150 fixed"
            src={
              "https://www.youtube.com/embed/" +
              playVideo +
              "?version=3&autoplay=1&loop=1&mute=1&controls=0&rel=0&cc_load_policy=0&vq=hd1080"
            }
          ></iframe>
        </div>
      ) : (
        <div className="absolute h-screen w-full">
          <img
            className="w-full h-[100%]"
            src={IMAGE_CDN_URL + showTitle.backdrop_path}
          />
        </div>
      )}
      {showTitle && <TvShowTitle showTitle = {showTitle}/>}
    </div>
  );
};

export default TvShowTrailer;
