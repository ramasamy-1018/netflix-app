import React from "react";
import useFilterMovieByLanguage from "../../hooks/useFilterMovieByLanguage";
import {
  addEnglishTvShows,
  addHindiTvShows,
  addKannadaTvShows,
  addMalayalamTvShows,
  addTopRatedTvShows,
  addTamilTvShows,
  addTeluguTvShows,
} from "../../store/tvSlice";
import TvShowTrailerContainer from "./TvShowTrailerContainer";
import SideBar from "../SideBar";
import TvShowSecondaryContainer from "./TvShowSecondaryContainer";
import useFilterMovieByCategory from "../../hooks/useFilterMoviesByCategory";

const ShowAllTvShows = () => {
  const genres = "80%7C10765%7C10768%7C35";
  useFilterMovieByCategory("tv", addTopRatedTvShows, "top_rated")
  useFilterMovieByLanguage("tv", addEnglishTvShows, "en", "first_air_date_year", genres);
  useFilterMovieByLanguage("tv", addTamilTvShows, "ta", "first_air_date_year", genres);
  useFilterMovieByLanguage("tv", addTeluguTvShows, "te", "first_air_date_year",genres);
  useFilterMovieByLanguage("tv", addHindiTvShows, "hi"," first_air_date_year", genres);
  useFilterMovieByLanguage("tv", addMalayalamTvShows, "ml", "first_air_date_year", genres);
  useFilterMovieByLanguage("tv", addKannadaTvShows, "ka", "first_air_date_year", genres);

  return (
    <div>
      <SideBar showMovies={true} ShowTv={false} />
      <TvShowTrailerContainer />
      <TvShowSecondaryContainer />

    </div>
  );
};

export default ShowAllTvShows;
