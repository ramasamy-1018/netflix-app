import React from "react";
import MovieCard from "./MovieCard";

const MovieListContainer = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="my-7">
      <h1 className="text-xl font-sans font-bold">{title}</h1>
      <div className="my-5 flex overflow-y-scroll no-scrollbar">
        <div className="flex flex-row-reverse">
          {movies.map((movie) => (
            <MovieCard key={movie.id} poster={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListContainer;
