import { useParams } from "react-router-dom";
import {
  addMovieCastDetails,
  addSecondaryMovieVideoTrailer,
  removeMovieCastDetails,
} from "../../store/movieSlice";
import MovieTrailer from "./MovieTrailer";
import CastDetailsContainer from "../castdetails/CastDetailsContainer";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Shimmer from "../../utils/Shimmer";

const SelectedMovie = () => {
  const dispatch = useDispatch();
  const [contentLoaded, setContentLoaded] = useState(false);
  const { param } = useParams();

  useEffect(() => {
    setTimeout(() => {
      setContentLoaded(true);
    }, 2000);
    return () => {
      dispatch(removeMovieCastDetails());
    };
  }, []);

  if (!contentLoaded) return <Shimmer />;

  return (
    <div>
      <MovieTrailer
        message={"SecondaryVideo"}
        action={addSecondaryMovieVideoTrailer}
        movieId={param}
      />
      <CastDetailsContainer
        stream={"movie"}
        action={addMovieCastDetails}
        title={"Cast and Crew"}
        id={param}
      />
    </div>
  );
};

export default SelectedMovie;
