import React, { useEffect } from "react";
import useGetTrailer from "../../hooks/useGetTrailer";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSecondaryTvShowVideoTrailer,
  removeSecondaryTvShowVideoDetails,
} from "../../store/tvSlice";
import { IMAGE_CDN_URL } from "../../utils/constants";
import Shimmer from "../../utils/Shimmer";
import SideBar from "../SideBar";

const TvShowTrailer = ({ message, action, tvShowId }) => {
  const dispatch = useDispatch();
  useGetTrailer("tv", action, tvShowId);

  const mainTvShowVideoTrailer = useSelector(
    (store) => store.tv.mainTvShowVideoTrailer
  );
  const secondaryTvShowtrailerVideo = useSelector(
    (store) => store.tv.secondaryTvShowVideoTrailer
  );
  const mainTvShowVideoDetails = useSelector(
    (store) => store.tv.mainTvShowVideoDetails
  );
  const secondaryTvShowVideoDetails = useSelector(
    (store) => store.tv.secondaryTvShowVideoDetails
  );

  useEffect(() => {
    return () => {
      dispatch(removeSecondaryTvShowVideoTrailer());
      dispatch(removeSecondaryTvShowVideoDetails());
    };
  }, []);

  if (
    message == "MainVideo" &&
    !mainTvShowVideoTrailer &&
    !mainTvShowVideoDetails
  )
    return <Shimmer />;
  if (
    message == "SecondaryVideo" &&
    !secondaryTvShowtrailerVideo &&
    !secondaryTvShowVideoDetails
  )
    return <Shimmer />;

  const playVideo =
    message == "MainVideo"
      ? mainTvShowVideoTrailer
      : secondaryTvShowtrailerVideo;
  const backdrop =
    message === "MainVideo"
      ? mainTvShowVideoDetails
      : secondaryTvShowVideoDetails;
  return (
    <div>
      <SideBar showMovies={true} ShowTv={true} />
      {playVideo ? (
        <div className="absolute h-screen aspect-video">
          <iframe
            className="w-[100%] h-screen transform scale-150 fixed"
            src={
              "https://www.youtube.com/embed/" +
              playVideo +
              "?version=3&autoplay=1&loop=1&mute=1&controls=0&rel=0&cc_load_policy=0&vq=hd1080"
            }
          ></iframe>
        </div>
      ) : (
        <div className="absolute h-screen w-screen">
          <img
            className="w-[100%] h-[100%]"
            src={IMAGE_CDN_URL + backdrop.backdrop_path}
          />
        </div>
      )}
    </div>
  );
};

export default TvShowTrailer;
