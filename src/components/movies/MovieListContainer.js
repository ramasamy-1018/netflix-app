import React from "react";
import MovieCard from "./MovieCard";

const MovieListContainer = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="mt-7">
      <h1 className="text-xl font-sans font-bold">{title}</h1>
      <div className="mt-5 flex overflow-y-scroll w-[100%] no-scrollbar">
        <div className="flex flex-row-reverse">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movieId={movie.id} poster={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListContainer;
