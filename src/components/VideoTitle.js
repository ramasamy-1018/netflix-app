import React from "react";
import useMovieDetails from "../hooks/useMovieDetails";
import { useSelector } from "react-redux";
import { IMAGE_CDN_URL } from "../utils/constants";
import { IonIcon } from "@ionic/react";
import { add, play } from "ionicons/icons";

const VideoTitle = (movieId) => {
  useMovieDetails(movieId);

  const mainVideoDetails = useSelector(
    (store) => store.movies.mainVideoDetails
  );

  if (!mainVideoDetails) return null;

  return (
    <div className="absolute w-[100%] text-white flex flex-col bg-gradient-to-r from-black bg-opacity-60 justify-center">
      <div className="relative left-14 w-[34%] h-screen flex justify-center flex-col animated-scale">
          <img className="h-32" src={IMAGE_CDN_URL + mainVideoDetails.logo} />
          <h1 className="text-2xl font-extrabold pt-5">
            {mainVideoDetails.releaseYear} • {mainVideoDetails.runtime}{" "}
          </h1>
          <h2 className="text-lg font-medium pt-7 inline-block">
            {mainVideoDetails.overview}
          </h2>
          <h2 className="text-2xl font-extrabold pt-7">
            {mainVideoDetails.genres.join(" | ")}
          </h2>
          <div className="flex pt-10">
            <button className="bg-gray-500 flex text-2xl font-bold w-5/6 h-16 bg-opacity-50 rounded-lg justify-center items-center">
              <IonIcon className="pr-4" icon={play} /> Watch Now
            </button>
            <button className="bg-gray-500 ml-2 w-1/6 h-16 text-3xl font-extraboldbold bg-opacity-50 rounded-lg flex justify-center items-center">
              <IonIcon icon={add} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
