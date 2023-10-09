import React, { useEffect, useState } from "react";
import TvShowTrailerContainer from "./TvShowTrailerContainer";
import TvShowSecondaryContainer from "./TvShowSecondaryContainer";
import useAddTvShowsToStore from "../../hooks/useAddTvShowsToStore"
import { useSelector } from "react-redux";

const ShowAllTvShows = () => {
  const showCastDetails = useSelector((store) => store.tv.showCastDetails);

  useAddTvShowsToStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <TvShowTrailerContainer />
      {showCastDetails && <TvShowSecondaryContainer />}

    </div>
  );
};

export default ShowAllTvShows;
