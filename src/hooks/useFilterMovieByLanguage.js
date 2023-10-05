import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useFilterMovieByLanguage = (stream,action,language,dateParam,genres) => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    getMoviesByLanguage();
  }, []);

  const getMoviesByLanguage = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/discover/"+ stream +"?include_adult=false&include_video=true&page=1&sort_by=popularity.desc&with_original_language=" + language +  "&with_genres=" + genres + dateParam + "=2000" ,
      API_OPTIONS
    );
    let responseJson = await response.json();
    dispatch(action(responseJson.results));
  };
};

export default useFilterMovieByLanguage;
