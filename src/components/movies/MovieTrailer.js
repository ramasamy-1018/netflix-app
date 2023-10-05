import React, { useEffect } from "react";
import useGetTrailer from "../../hooks/useGetTrailer";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSecondaryMovieVideoTrailer,
  removeSecondaryMovieVideoDetails,
} from "../../store/movieSlice";
import { IMAGE_CDN_URL } from "../../utils/constants";

const MovieTrailer = ({ message, action, movieId }) => {

  const dispatch = useDispatch();
  useGetTrailer("movie",action,movieId);

  const mainMovieVideoTrailer = useSelector((store) => store.movies.mainMovieVideoTrailer);
  const secondaryMovietrailerVideo = useSelector(
    (store) => store.movies.secondaryMovieVideoTrailer
  );
  const mainMovieVideoDetails = useSelector(
    (store) => store.movies.mainMovieVideoDetails
  );
  const secondaryMovieVideoDetails = useSelector(
    (store) => store.movies.secondaryMovieVideoDetails
  );

  useEffect(() => {
    return () => {
      dispatch(removeSecondaryMovieVideoTrailer());
      dispatch(removeSecondaryMovieVideoDetails());
    };
  }, []);

  if (message == "MainVideo" && !mainMovieVideoTrailer && !mainMovieVideoDetails) return null;
  if (
    message == "SecondaryVideo" &&
    !secondaryMovietrailerVideo &&
    !secondaryMovieVideoDetails
  )
    return null;

  const playVideo =
    message == "MainVideo" ? mainMovieVideoTrailer : secondaryMovietrailerVideo;
  const backdrop =
    message === "MainVideo"
      ? mainMovieVideoDetails
      : secondaryMovieVideoDetails
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

export default MovieTrailer;
