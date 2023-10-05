import React from 'react'
import { useSelector } from 'react-redux';
import MovieListContainer from './MovieListContainer';

const MovieSecondaryContainer = () => {

  const movies = useSelector((store) => store.movies);

  if(!movies) return null
  
  return (
    <div className='absolute overflow-hidden top-full w-[100%] text-white'>
    <div className='pl-[9%] pt-1 bg-black'>
        <MovieListContainer title={"Now Playing"} movies = {movies.nowPlayingMovies} />
        <MovieListContainer title={"Popular"} movies = {movies.popularMovies} />
        <MovieListContainer title={"Top Rated"} movies = {movies.topRatedMovies} />
        <MovieListContainer title={"Upcoming"} movies = {movies.upcomingMovies} />
        <MovieListContainer title={"Tamil Movies"} movies = {movies.tamilMovies} />
        <MovieListContainer title={"Telugu Movies"} movies = {movies.teluguMovies} />
        <MovieListContainer title={"Hindi Movies"} movies = {movies.hindiMovies} />
        <MovieListContainer title={"Kannada Movies"} movies = {movies.kannadaMovies} />
        <MovieListContainer title={"Malayalam Movies"} movies = {movies.malayalamMovies} />
    </div>
    </div>
  )
}

export default MovieSecondaryContainer