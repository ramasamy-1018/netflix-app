import React from 'react'
import { useSelector } from 'react-redux';
import MovieListContainer from './MovieListContainer';
import Shimmer from '../../utils/Shimmer';

const MovieSecondaryContainer = () => {

  const movies = useSelector((store) => store.movie);

  if(!movies) return (<Shimmer />)
  
  return (
    <div className='absolute overflow-hidden top-full w-[100%] text-white'>
    <div className='pl-36 pt-1 bg-black'>
        <MovieListContainer title={"Now Playing Movies"} movies = {movies.nowPlayingMovies} />
        <MovieListContainer title={"Popular Movies"} movies = {movies.popularMovies} />
        <MovieListContainer title={"Top Rated Movies"} movies = {movies.topRatedMovies} />
        <MovieListContainer title={"Upcoming Movies"} movies = {movies.upcomingMovies} />
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