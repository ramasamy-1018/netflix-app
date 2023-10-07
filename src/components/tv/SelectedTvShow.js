import { useParams } from "react-router-dom";
import {
  addSecondaryTvShowVideoTrailer,
  addTvShowCastDetails,
} from "../../store/tvSlice";
import TvShowTrailer from "./TvShowTrailer";
import CastDetailsContainer from "../castdetails/CastDetailsContainer";
import { removeTvShowCastDetails } from "../../store/tvSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Shimmer from "../../utils/Shimmer";

const SelectedTvShow = () => {
  const [contentLoaded, setContentLoaded] = useState(false);

  const showCastDetails = useSelector((store) => store.tv.showCastDetails);

  const dispatch = useDispatch();

  const { param } = useParams();

  useEffect(() => {
    return () => {
      dispatch(removeTvShowCastDetails());
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setContentLoaded(true);
    }, 1000);
  }, []);

  if (!contentLoaded) return <Shimmer />;

  return (
    <div>
      <TvShowTrailer
        message={"SecondaryVideo"}
        action={addSecondaryTvShowVideoTrailer}
        tvShowId={param}
      />
      {showCastDetails && <CastDetailsContainer
        stream={"tv"}
        action={addTvShowCastDetails}
        title={"Cast and Crew"}
        id={param}
      />}
    </div>
  );
};

export default SelectedTvShow;
