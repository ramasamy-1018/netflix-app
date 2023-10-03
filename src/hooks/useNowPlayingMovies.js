import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/movieSlice";

const useNowPlayingMovies = () => {

  const dispatch = useDispatch()

  const getNowPlayingMovies = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    let responseJson = await response.json();
    dispatch(addNowPlayingMovies(responseJson.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
