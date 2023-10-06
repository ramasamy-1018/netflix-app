import React from "react";
import { useSelector } from "react-redux";
import useGetCastDetails from "../../hooks/useGetCastDetails";
import CastDetailsCard from "./CastDetailsCard";

const CastDetailsContainer = ({ stream, action, title, id }) => {
  useGetCastDetails(stream, action, id);

  const tvShowCastDetails = useSelector(
    (store) => store?.tv?.tvShowCastDetails
  );
  const movieCastDetails = useSelector(
    (store) => store?.movies?.movieCastDetails
  );

  if (stream === "tv" && !tvShowCastDetails) return null;
  if (stream === "movie" && !movieCastDetails) return null;

  const castDetails = stream == "movie" ? movieCastDetails : tvShowCastDetails;

  return (
    <div className="absolute overflow-hidden top-full w-[100%] text-white">
      <div className="pl-[10.5%] pt-4 bg-black">
        <h1 className="text-xl font-sans font-bold">{title}</h1>
        <div className="mt-5 flex overflow-y-scroll w-[100%] no-scrollbar">
          <div className="flex">
            {castDetails.map((castDetail) => (
              <CastDetailsCard
                key={castDetail?.name}
                name={castDetail?.name}
                poster={castDetail?.profile_path}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastDetailsContainer;
