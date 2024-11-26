import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useFilterMovieByLanguage = (stream,action,text,language,dateParam,genres) => {
  
  const dispatch = useDispatch();
  const result = useSelector((store) => store[stream][text])

  useEffect(() => {
    !result && getMoviesByLanguage();
  }, []);

  const getMoviesByLanguage = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/discover/" + stream + "?include_adult=false&include_video=true&page=1&"+ dateParam +"=2024&sort_by=popularity.desc&with_original_language="+ 
      API_OPTIONS
    );
    let responseJson = await response.json();
    dispatch(action(responseJson.results));
  };
};

export default useFilterMovieByLanguage;
