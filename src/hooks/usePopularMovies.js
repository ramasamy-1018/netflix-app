import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../store/movieSlice";

const usePopularMovies = () => {

  const dispatch = useDispatch()

  const getPopularMovies = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=1",
      API_OPTIONS
    );
    let responseJson = await response.json();
    dispatch(addPopularMovies(responseJson.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
