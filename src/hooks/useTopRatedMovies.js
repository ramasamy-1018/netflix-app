import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addTopRatedMovies } from "../store/movieSlice";

const useTopRatedMovies = () => {

  const dispatch = useDispatch()

  const getTopRatedMovies = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    let responseJson = await response.json();
    dispatch(addTopRatedMovies(responseJson.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
