import React, { useEffect } from "react";
import {
  removeSecondaryMovieVideoTrailer,
  removeSecondaryMovieVideoDetails,
} from "../../store/movieSlice";
import { IMAGE_CDN_URL } from "../../utils/constants";
import SideBar from "../SideBar";
import { useDispatch } from "react-redux";
import useGetAllMovieDetails from "../../hooks/useGetAllMovieDetails";
import MovieTitle from "./MovieTitle";
import Shimmer from "../../utils/Shimmer";

const MovieTrailer = ({ message,movieId }) => {
  const dispatch = useDispatch();
  const {playVideo,showTitle} = useGetAllMovieDetails(message,movieId)

  useEffect(() => {
    return () => {
      dispatch(removeSecondaryMovieVideoTrailer());
      dispatch(removeSecondaryMovieVideoDetails());
    };
  }, []);

  if(!playVideo && !showTitle) return (<Shimmer />)

  return (
    <div>
      <SideBar showMovies={true} ShowTv={true} />
      {playVideo ? (
        <div className="absolute h-screen w-screen aspect-video bg-gray-600">
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
        <div className="absolute h-screen w-screen">
          <img
            className="w-[100%] h-[100%]"
            src={IMAGE_CDN_URL + showTitle?.backdrop_path}
          />
        </div>
      )}
      {showTitle && <MovieTitle showTitle = {showTitle} />}
    </div>
  );
};

export default MovieTrailer;
