import React from 'react'
import { useSelector } from 'react-redux';
import MovieListContainer from './MovieListContainer';

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies);

  if(!movies) return null
  
  return (
    <div className='absolute overflow-hidden top-full w-screen text-white'>
    <div className='pl-32 pt-1.5 bg-black'>
        <MovieListContainer title={"Now Playing"} movies = {movies.nowPlayingMovies} />
        <MovieListContainer title={"Popular"} movies = {movies.popularMovies} />
        <MovieListContainer title={"Top Rated"} movies = {movies.topRatedMovies} />
        <MovieListContainer title={"Upcoming"} movies = {movies.upcomingMovies} />
    </div>
    </div>
  )
}

export default SecondaryContainer