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

const ShowAllMovies = () => {
  useFilterMovieByCategory("movie", addNowPlayingMovies, "now_playing");
  useFilterMovieByCategory("movie", addPopularMovies, "popular");
  useFilterMovieByCategory("movie", addTopRatedMovies, "top_rated");
  useFilterMovieByCategory("movie", addUpcomingMovies, "upcoming");
  useFilterMovieByLanguage("movie", addTamilMovies, "ta", "primary_release_year");
  useFilterMovieByLanguage("movie", addTeluguMovies, "te","primary_release_year");
  useFilterMovieByLanguage("movie", addHindiMovies, "hi", "primary_release_year");
  useFilterMovieByLanguage("movie", addMalayalamMovies, "ml", "primary_release_year");
  useFilterMovieByLanguage("movie", addKannadaMovies, "ka", "primary_release_year");

  return (
    <div>
      <SideBar showMovies={false} ShowTv={true}/>
      <MovieTrailerContainer />
      <MovieSecondaryContainer />
    </div>
  );
};

export default ShowAllMovies;
