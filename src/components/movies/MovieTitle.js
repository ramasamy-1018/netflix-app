import React from "react";
import useMovieDetails from "../../hooks/useMovieDetails";
import { useSelector } from "react-redux";
import { IMAGE_CDN_URL } from "../../utils/constants";
import { IonIcon } from "@ionic/react";
import { add, play } from "ionicons/icons";

const MovieTitle = ({ message, action, movieId }) => {
  useMovieDetails("movie",action,movieId);

  const mainMovieVideoDetails = useSelector(
    (store) => store.movies.mainMovieVideoDetails
  );

  const secondaryMovieVideoDetails = useSelector(
    (store) => store.movies.secondaryMovieVideoDetails
  );

  if (message == "MainVideo" && !mainMovieVideoDetails) return null;
  if (message == "SecondaryVideo" && !secondaryMovieVideoDetails) return null;

  const showTitle =
    message == "MainVideo" ? mainMovieVideoDetails : secondaryMovieVideoDetails;

  return (
    <div className="absolute w-[100%] text-white flex flex-col bg-gradient-to-r from-black bg-opacity-60 justify-center">
      <div className="relative left-20 w-[34%] h-screen flex justify-center flex-col animated-scale">
        {showTitle.logo? (
          <img
            className="h-24"
            src={IMAGE_CDN_URL + showTitle.logo}
          />
        ) : (
          <h1 className="text-5xl font-extrabold pt-5">{showTitle.title}</h1>
        )}
        <h1 className="text-2xl font-extrabold pt-5">
          {showTitle.releaseYear} • {showTitle.runtime}{" "}
        </h1>
        <h2 className="text-lg font-medium pt-7 inline-block">
          {showTitle.overview}
        </h2>
        <h2 className="text-2xl font-extrabold pt-7">
          {showTitle.genres.join(" | ")}
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

export default MovieTitle;
