import React from "react";
import useGetTrailer from "../hooks/useGetTrailer";
import { useSelector } from "react-redux";

const VideoTrailer = ({ movieId }) => {
  useGetTrailer(movieId);

  const trailerVideo = useSelector((store) => store.movies.mainVideoTrailer);
  if (!trailerVideo) return null;
  return (
    <div className="absolute h-screen aspect-video">
      <iframe
        className="w-[100%] h-screen transform scale-150 fixed"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo+
          "?version=3&autoplay=1&loop=1&mute=1&controls=0&rel=0&cc_load_policy=0&vq=hd1080"
        }
      ></iframe>
    </div>
  );
};

export default VideoTrailer;
