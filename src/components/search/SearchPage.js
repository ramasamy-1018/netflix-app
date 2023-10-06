import React from 'react'
import SideBar from '../SideBar';
import SearchResponseContainer from './SearchResponseContainer';
import SearchBar from './SearchBar';

const SearchPage = () => {
  return (
    <div className="w-screen h-screen bg-black text-white">
      <SideBar showMovies={true} ShowTv={true} />
      <SearchBar />
      <SearchResponseContainer />
    </div>
  )
}

export default SearchPage