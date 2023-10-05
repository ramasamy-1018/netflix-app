import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useGetTrailer = (stream,action,id) => {
  const dispatch = useDispatch();

  const getTrailer = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/"+stream+"/" + id + "/videos",
      API_OPTIONS
    );
    let responseJson = await response?.json();
    setTrailer(responseJson)
  };

  const setTrailer = (responseJson) => {
    let trailerVideo = responseJson.results?.filter(
      (video) => video.type == "Trailer" && video.name == "Official Trailer"
    );
    trailerVideo = !trailerVideo[0]?.key ? responseJson?.results[0]?.key : trailerVideo[0]?.key;
    dispatch(action(trailerVideo));
  };

  useEffect(() => {
    getTrailer();
  }, []);
};

export default useGetTrailer;
