import { useParams } from "react-router-dom";
import {
  addMovieCastDetails,
  addSecondaryMovieVideoTrailer,
  removeMovieCastDetails,
} from "../../store/movieSlice";
import MovieTrailer from "./MovieTrailer";
import CastDetailsContainer from "../castdetails/CastDetailsContainer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const SelectedMovie = () => {
  const dispatch = useDispatch();
  const { param } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      dispatch(removeMovieCastDetails());
    };
  }, []);

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
