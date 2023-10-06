import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTvShowSeasonDetails } from "../store/tvSlice";

const useGetTvShowSeasonDetails = (id) => {
  const dispatch = useDispatch();

  const getDetails = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/tv/"+ id +"/season/1",
      API_OPTIONS
    );
    let responseJson = await response?.json();
    dispatch(addTvShowSeasonDetails(responseJson?.episodes))
  };

  useEffect(() => {
    getDetails();
  }, []);
};

export default useGetTvShowSeasonDetails;
