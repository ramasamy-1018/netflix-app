import React, { useEffect } from "react";
import SearchCard from "./SearchCard";
import { useDispatch, useSelector } from "react-redux";
import { removeSearchResult } from "../../store/movieSlice";

const SearchResponseContainer = () => {
  const dispatch = useDispatch();
  const searchResult = useSelector((store) => store.movie.searchResult);
  const nowPlayingMovies = useSelector(
    (store) => store.movie.nowPlayingMovies
  );

  useEffect(() => {
    return () => {
      dispatch(removeSearchResult());
    };
  }, []);

  if (!searchResult)
    return (
      <div className="ml-12">
        <h1 className="relative ml-[20%] mt-10 text-xl font-semibold pl-2">
          Popular Searches
        </h1>
        <div className="fixed overflow-y-scroll no-scrollbar w-full h-full mt-4 flex flex-col">
          {nowPlayingMovies.map((item) => (
            <SearchCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    );

  return (
    <div className="ml-12">
        <h1 className="relative ml-[20%] mt-10 text-xl font-semibold pl-2">
          Your Search Results
        </h1>
        <div className="fixed overflow-y-scroll no-scrollbar w-full h-full mt-4 flex flex-col">
          {searchResult.map((item) => (
            <SearchCard key={item.id} item={item} />
          ))}
        </div>
      </div>
  );
};

export default SearchResponseContainer;
