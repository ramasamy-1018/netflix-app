import { useParams } from "react-router-dom";
import {
  addSecondaryTvShowVideoTrailer,
  addTvShowCastDetails,
} from "../../store/tvSlice";
import TvShowTrailer from "./TvShowTrailer";
import CastDetailsContainer from "../castdetails/CastDetailsContainer";
import { removeTvShowCastDetails } from "../../store/tvSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SelectedTvShow = () => {
  const showCastDetails = useSelector((store) => store.tv.showCastDetails);

  const dispatch = useDispatch();

  const { param } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      dispatch(removeTvShowCastDetails());
    }
  }, []);

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
