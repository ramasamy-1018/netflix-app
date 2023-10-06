import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useGetCastDetails = (stream,action,id) => {
  const dispatch = useDispatch()

  var api = stream == "tv"? 'https://api.themoviedb.org/3/tv/'+id+'/season/1/credits' : 'https://api.themoviedb.org/3/movie/'+id+'/credits'

  const getCastDetails = async () => {
    let response = await fetch
      (api,API_OPTIONS
    );
    let responseJson = await response?.json();
    console.log(responseJson)
    dispatch(action(responseJson?.cast))
  };

  useEffect(() => {
    getCastDetails();
  }, []);
};

export default useGetCastDetails;
