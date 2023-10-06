import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const useMovieDetails = (stream,action,id) => {

  const dispatch = useDispatch();

  const getMovieLogo = async () => {
    let response = await fetch('https://api.themoviedb.org/3/'+ stream +'/'+ id +'/images',API_OPTIONS)
    let responseJson = await response?.json();
    let titleLogo = responseJson?.logos[0]?.file_path;
    return titleLogo;
  }

  const getMovieDetails = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/" + stream +"/" + id,
      API_OPTIONS
    );
    let responseJson = await response?.json();
    stream == "movie" ? setMovieDetails(responseJson) : setTvShowDetails(responseJson);
  };

  const convertRunTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  const setMovieDetails = async (responseJson) => {
    const { id,title, overview, genres, runtime, adult,release_date,backdrop_path} = responseJson;
    const genre = genres.reduce((acc, genre) => {
      acc.push(genre.name);
      return acc;
    }, []);
    const playTime = convertRunTime(runtime);
    const releaseYear = release_date.split("-")[0] 
    const titleLogo = await getMovieLogo(); 
    dispatch(
      action({
        id:id,
        title: title,
        logo:titleLogo,
        overview: overview,
        genres: genre,
        runtime: playTime,
        adult: adult,
        releaseYear: releaseYear,
        backdrop_path: backdrop_path
      })
      
    );
  };

  const setTvShowDetails = async (responseJson) => {
    const { id, name, overview, genres, number_of_seasons,number_of_episodes, adult,last_air_date,backdrop_path} = responseJson;
    const genre = genres.reduce((acc, genre) => {
      acc.push(genre.name);
      return acc;
    }, []);
    const releaseYear = last_air_date.split("-")[0] 
    const titleLogo = await getMovieLogo(); 
    dispatch(
      action({
        id:id,
        title: name,
        logo:titleLogo,
        overview: overview,
        genres: genre,
        seasons: number_of_seasons  > 1 ? `${number_of_seasons} Seasons`: `${number_of_seasons} Season` ,
        episodes: number_of_episodes > 1 ? `${number_of_episodes} Episodes`: `$${number_of_episodes} Episode` ,
        adult: adult,
        releaseYear: releaseYear,
        backdrop_path: backdrop_path
      })
      
    );
  };

  useEffect(() => {
    getMovieDetails();
  }, []);
};

export default useMovieDetails;
