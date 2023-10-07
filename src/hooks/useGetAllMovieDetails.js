import { useSelector } from "react-redux";
import useGetTrailer from "./useGetTrailer";
import useMovieDetails from "./useMovieDetails"
import {addMainMovieVideoTrailer, addSecondaryMovieVideoTrailer, addMainMovieVideoDetails,addSecondaryMovieVideoDetails} from "../store/movieSlice"

const useGetAllMovieDetails = (message,movieId) => {

  const trailerAction = message == "MainVideo"? addMainMovieVideoTrailer : addSecondaryMovieVideoTrailer;
  const detailsAction = message == "MainVideo"? addMainMovieVideoDetails : addSecondaryMovieVideoDetails;

  useGetTrailer("movie", trailerAction, movieId);
  useMovieDetails("movie", detailsAction, movieId);

  const mainMovieVideoTrailer = useSelector((store) => store.movie.mainMovieVideoTrailer);
  const secondaryMovietrailerVideo = useSelector((store) => store.movie.secondaryMovieVideoTrailer);
  const mainMovieVideoDetails = useSelector((store) => store.movie.mainMovieVideoDetails);
  const secondaryMovieVideoDetails = useSelector((store) => store.movie.secondaryMovieVideoDetails);

  const playVideo = message == "MainVideo" ? mainMovieVideoTrailer : secondaryMovietrailerVideo;
  const showTitle = message === "MainVideo" ? mainMovieVideoDetails : secondaryMovieVideoDetails;
  return {playVideo,showTitle};
};

export default useGetAllMovieDetails;
