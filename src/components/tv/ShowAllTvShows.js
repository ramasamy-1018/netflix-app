import React, { useEffect, useState } from "react";
import TvShowTrailerContainer from "./TvShowTrailerContainer";
import TvShowSecondaryContainer from "./TvShowSecondaryContainer";
import Shimmer from "../../utils/Shimmer";
import useAddTvShowsToStore from "../../hooks/useAddTvShowsToStore"

const ShowAllTvShows = () => {

  const [contentLoaded, setContentLoaded] = useState(false);

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
      <TvShowSecondaryContainer />

    </div>
  );
};

export default ShowAllTvShows;
