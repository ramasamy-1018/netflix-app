import useFilterMovieByLanguage from "../../hooks/useFilterMovieByLanguage";
import useFilterMovieByCategory from "../../hooks/useFilterMoviesByCategory";
import {
  addHindiMovies,
  addKannadaMovies,
  addMalayalamMovies,
  addTamilMovies,
  addTeluguMovies,
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../../store/movieSlice";
import MovieSecondaryContainer from "./MovieSecondaryContainer";
import SideBar from "../SideBar";
import MovieTrailerContainer from "./MovieTrailerContainer";
import { useEffect, useState } from "react";
import Shimmer from "../../utils/Shimmer";

const ShowAllMovies = () => {

  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setContentLoaded(true);
    }, 1000);
  }, []);

  useFilterMovieByCategory("movie", addNowPlayingMovies, "now_playing","nowPlayingMovies");
  useFilterMovieByCategory("movie", addPopularMovies, "popular","popularMovies");
  useFilterMovieByCategory("movie", addTopRatedMovies, "top_rated","topRatedMovies");
  useFilterMovieByCategory("movie", addUpcomingMovies, "upcoming","upcomingMovies");
  useFilterMovieByLanguage("movie", addTamilMovies, "tamilMovies", "ta", "primary_release_year");
  useFilterMovieByLanguage("movie", addTeluguMovies, "teluguMovies", "te","primary_release_year");
  useFilterMovieByLanguage("movie", addHindiMovies,"hindiMovies", "hi", "primary_release_year");
  useFilterMovieByLanguage("movie", addMalayalamMovies,"malayalamMovies", "ml", "primary_release_year");
  useFilterMovieByLanguage("movie", addKannadaMovies,"kannadaMovies", "ka", "primary_release_year");

  if(!contentLoaded) return (<Shimmer />)

  return (
    <div>
      <MovieTrailerContainer />
      <MovieSecondaryContainer />
    </div>
  );
};

export default ShowAllMovies;
