import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMainVideoDetails } from "../store/movieSlice";

const useMovieDetails = ({ movieId }) => {

  const dispatch = useDispatch();

  const getMovieLogo = async () => {
    let response = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/images',API_OPTIONS)
    let responseJson = await response.json();
    let titleLogo = responseJson.logos[0].file_path;
    return titleLogo;
  }

  const getMovieDetails = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId,
      API_OPTIONS
    );
    let responseJson = await response.json();
    setMovieDetails(responseJson);
  };

  const convertRunTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  const setMovieDetails = async (responseJson) => {
    const { title, overview, genres, runtime, adult,release_date } = responseJson;
    const genre = genres.reduce((acc, genre) => {
      acc.push(genre.name);
      return acc;
    }, []);
    const playTime = convertRunTime(runtime);
    const releaseYear = release_date.split("-")[0] 
    const titleLogo = await getMovieLogo(); 
    dispatch(
      addMainVideoDetails({
        title: title,
        logo:titleLogo,
        overview: overview,
        genres: genre,
        runtime: playTime,
        adult: adult,
        releaseYear: releaseYear
      })
    );
  };

  useEffect(() => {
    getMovieDetails();
  }, []);
};

export default useMovieDetails;
