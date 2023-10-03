import React, { useEffect } from "react";
import useGetTrailer from "../hooks/useGetTrailer";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSecondaryVideoTrailer,
  removeSecondaryVideoDetails,
} from "../store/movieSlice";
import { IMAGE_CDN_URL } from "../utils/constants";

const VideoTrailer = ({ message, action, movieId }) => {

  const dispatch = useDispatch();
  useGetTrailer(action, movieId);

  const trailerVideo = useSelector((store) => store.movies.mainVideoTrailer);
  const secondarytrailerVideo = useSelector(
    (store) => store.movies.secondaryVideoTrailer
  );
  const mainVideoDetails = useSelector(
    (store) => store.movies.mainVideoDetails
  );
  const secondaryVideoDetails = useSelector(
    (store) => store.movies.secondaryVideoDetails
  );

  useEffect(() => {
    return () => {
      dispatch(removeSecondaryVideoTrailer());
      dispatch(removeSecondaryVideoDetails());
    };
  }, []);

  if (message == "MainVideo" && !trailerVideo && !mainVideoDetails) return null;
  if (
    message == "SecondaryVideo" &&
    !secondarytrailerVideo &&
    !secondaryVideoDetails
  )
    return null;

  const playVideo =
    message == "MainVideo" ? trailerVideo : secondarytrailerVideo;
  const backdrop =
    message === "MainVideo"
      ? mainVideoDetails
      : secondaryVideoDetails
  return (
    <div>
      {playVideo ? (
        <div className="absolute h-screen aspect-video">
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
          <img className="w-[100%] h-[100%]" src={IMAGE_CDN_URL + backdrop.backdrop_path} />
        </div>
      )}
    </div>
  );
};

export default VideoTrailer;
