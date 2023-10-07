import useFilterMovieByLanguage from "./useFilterMovieByLanguage";
import useFilterMovieByCategory from "./useFilterMoviesByCategory";
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
} from "../store/movieSlice";

const useAddMoviesToStore = () => {
    useFilterMovieByCategory("movie", addNowPlayingMovies, "now_playing","nowPlayingMovies");
    useFilterMovieByCategory("movie", addPopularMovies, "popular","popularMovies");
    useFilterMovieByCategory("movie", addTopRatedMovies, "top_rated","topRatedMovies");
    useFilterMovieByCategory("movie", addUpcomingMovies, "upcoming","upcomingMovies");
    useFilterMovieByLanguage("movie", addTamilMovies, "tamilMovies", "ta", "primary_release_year");
    useFilterMovieByLanguage("movie", addTeluguMovies, "teluguMovies", "te","primary_release_year");
    useFilterMovieByLanguage("movie", addHindiMovies,"hindiMovies", "hi", "primary_release_year");
    useFilterMovieByLanguage("movie", addMalayalamMovies,"malayalamMovies", "ml", "primary_release_year");
    useFilterMovieByLanguage("movie", addKannadaMovies,"kannadaMovies", "ka", "primary_release_year");
}

export default useAddMoviesToStore;