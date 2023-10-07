import React, { useEffect, useState } from "react";
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
import TvShowSecondaryContainer from "./TvShowSecondaryContainer";
import useFilterMovieByCategory from "../../hooks/useFilterMoviesByCategory";
import { useSelector } from "react-redux";
import Shimmer from "../../utils/Shimmer";

const ShowAllTvShows = () => {

  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setContentLoaded(true);
    }, 1000);
  }, []);

  const showCastDetails = useSelector((store) => store.tv.showCastDetails)

  const genres = "80%7C10765%7C10768%7C35";
  useFilterMovieByCategory("tv", addTopRatedTvShows, "top_rated","topRatedTvShows")
  useFilterMovieByLanguage("tv", addEnglishTvShows,"englishTvShows", "en", "first_air_date_year", genres);
  useFilterMovieByLanguage("tv", addTamilTvShows, "tamilTvShows","ta", "first_air_date_year", genres);
  useFilterMovieByLanguage("tv", addTeluguTvShows,"teluguTvShows", "te", "first_air_date_year",genres);
  useFilterMovieByLanguage("tv", addHindiTvShows,"hindiTvShows", "hi"," first_air_date_year", genres);
  useFilterMovieByLanguage("tv", addMalayalamTvShows,"malayalamTvShows", "ml", "first_air_date_year", genres);
  useFilterMovieByLanguage("tv", addKannadaTvShows,"kannadaTvShows", "ka", "first_air_date_year", genres);
  
  if(!contentLoaded) return (<Shimmer />)


  return (
    <div>
      <TvShowTrailerContainer />
      { showCastDetails && <TvShowSecondaryContainer /> }

    </div>
  );
};

export default ShowAllTvShows;
