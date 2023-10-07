import { useSelector } from "react-redux";
import useGetTrailer from "./useGetTrailer";
import useMovieDetails from "./useMovieDetails"
import { addMainTvShowVideoTrailer,addMainTvShowVideoDetails,addSecondaryTvShowVideoDetails,addSecondaryTvShowVideoTrailer } from "../store/tvSlice";

const useGetAllMovieDetails = (message,movieId) => {

  const trailerAction = message == "MainVideo"? addMainTvShowVideoTrailer : addSecondaryTvShowVideoTrailer;
  const detailsAction = message == "MainVideo"? addMainTvShowVideoDetails : addSecondaryTvShowVideoDetails;

  useGetTrailer("tv", trailerAction, movieId);
  useMovieDetails("tv", detailsAction, movieId);

  const mainTvShowVideoTrailer = useSelector((store) => store.tv.mainTvShowVideoTrailer);
  const secondaryTvShowVideoTrailer = useSelector((store) => store.tv.secondaryTvShowVideoTrailer);
  const mainTvShowVideoDetails = useSelector((store) => store.tv.mainTvShowVideoDetails);
  const secondaryTvShowVideoDetails = useSelector((store) => store.tv.secondaryTvShowVideoDetails);

  const playVideo = message == "MainVideo" ? mainTvShowVideoTrailer : secondaryTvShowVideoTrailer;
  const showTitle = message === "MainVideo" ? mainTvShowVideoDetails : secondaryTvShowVideoDetails;
  return {playVideo,showTitle};
};

export default useGetAllMovieDetails;
