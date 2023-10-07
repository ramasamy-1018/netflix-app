import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useFilterMovieByCategory = (stream,action,category,text) => {
  const dispatch = useDispatch();

  const result = useSelector((store) => store[stream][text])

  const getMoviesByLanguage = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/"+ stream +"/"+ category +"?&page=1",
      API_OPTIONS
    );
    let responseJson = await response.json();
    dispatch(action(responseJson.results));
  };

  useEffect(() => {
    !result && getMoviesByLanguage();
  }, []);
};

export default useFilterMovieByCategory;
