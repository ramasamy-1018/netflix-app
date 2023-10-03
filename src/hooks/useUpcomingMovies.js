import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../store/movieSlice";

const useUpcomingMovies = () => {

  const dispatch = useDispatch()

  const getUpcomingMovies = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    let responseJson = await response.json();
    dispatch(addUpcomingMovies(responseJson.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
