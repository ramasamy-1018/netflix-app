import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useFilterMovieByCategory = (action,category) => {
  const dispatch = useDispatch();

  const getMoviesByLanguage = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/"+ category +"?&page=1",
      API_OPTIONS
    );
    let responseJson = await response.json();
    dispatch(action(responseJson.results));
  };

  useEffect(() => {
    getMoviesByLanguage();
  }, []);
};

export default useFilterMovieByCategory;
