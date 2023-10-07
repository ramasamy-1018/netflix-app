import React, { useEffect, useState } from "react";
import TvShowTrailerContainer from "./TvShowTrailerContainer";
import TvShowSecondaryContainer from "./TvShowSecondaryContainer";
import Shimmer from "../../utils/Shimmer";
import useAddTvShowsToStore from "../../hooks/useAddTvShowsToStore"
import { useSelector } from "react-redux";

const ShowAllTvShows = () => {

  const [contentLoaded, setContentLoaded] = useState(false);
  const showCastDetails = useSelector((store) => store.tv.showCastDetails);

  useAddTvShowsToStore();

  useEffect(() => {
    setTimeout(() => {
      setContentLoaded(true);
    }, 1000);
  }, []);

  if(!contentLoaded) return (<Shimmer />)

  return (
    <div>
      <TvShowTrailerContainer />
      {showCastDetails &&<TvShowSecondaryContainer />}

    </div>
  );
};

export default ShowAllTvShows;
