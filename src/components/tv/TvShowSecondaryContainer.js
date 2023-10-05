import React from 'react'
import { useSelector } from 'react-redux';
import TvShowListContainer from './TvShowListContainer';

const TvShowSecondaryContainer = () => {

  const tvShows = useSelector((store) => store.tv);

  if(!tvShows) return null
  
  return (
    <div className='absolute overflow-hidden top-full w-[100%] text-white'>
    <div className='pl-[9%] pt-1 bg-black'>
        <TvShowListContainer title={"Top Rated Tv Shows"} tvShows = {tvShows.topRatedTvShows} />
        <TvShowListContainer title={"English Tv Shows"} tvShows = {tvShows.englishTvShows} />
        <TvShowListContainer title={"Tamil Tv Shows"} tvShows = {tvShows.tamilTvShows} />
        <TvShowListContainer title={"Telugu Tv Shows"} tvShows = {tvShows.teluguTvShows} />
        <TvShowListContainer title={"Hindi Tv Shows"} tvShows = {tvShows.hindiTvShows} />
        <TvShowListContainer title={"Kannada Tv Shows"} tvShows = {tvShows.kannadaTvShows} />
        <TvShowListContainer title={"Malayalam Tv Shows"} tvShows = {tvShows.malayalamTvShows} />
    </div>
    </div>
  )
}

export default TvShowSecondaryContainer