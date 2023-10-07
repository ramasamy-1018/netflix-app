import useFilterMovieByLanguage from "./useFilterMovieByLanguage";
import {
  addEnglishTvShows,
  addHindiTvShows,
  addKannadaTvShows,
  addMalayalamTvShows,
  addTopRatedTvShows,
  addTamilTvShows,
  addTeluguTvShows,
} from "../store/tvSlice";
import useFilterMovieByCategory from "./useFilterMoviesByCategory";


const useAddTvShowsToStore = () => {
    const genres = "80%7C10765%7C10768%7C35";
    useFilterMovieByCategory("tv", addTopRatedTvShows, "top_rated","topRatedTvShows")
    useFilterMovieByLanguage("tv", addEnglishTvShows,"englishTvShows", "en", "first_air_date_year", genres);
    useFilterMovieByLanguage("tv", addTamilTvShows, "tamilTvShows","ta", "first_air_date_year", genres);
    useFilterMovieByLanguage("tv", addTeluguTvShows,"teluguTvShows", "te", "first_air_date_year",genres);
    useFilterMovieByLanguage("tv", addHindiTvShows,"hindiTvShows", "hi"," first_air_date_year", genres);
    useFilterMovieByLanguage("tv", addMalayalamTvShows,"malayalamTvShows", "ml", "first_air_date_year", genres);
    useFilterMovieByLanguage("tv", addKannadaTvShows,"kannadaTvShows", "ka", "first_air_date_year", genres);
    
}

export default useAddTvShowsToStore