import React from "react";
import TvShowCard from "./TvShowCard";

const TvShowListContainer = ({ title, tvShows }) => {
  if (!tvShows) return null;

  return (
    <div className="mt-7">
      <h1 className="text-xl font-sans font-bold">{title}</h1>
      <div className="mt-5 flex overflow-y-scroll no-scrollbar">
        <div className="flex">
          {tvShows.map((tvShow) => (
            <TvShowCard key={tvShow.id} tvShowId={tvShow.id} poster={tvShow.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TvShowListContainer;
