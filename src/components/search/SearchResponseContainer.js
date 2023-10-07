import React, { useEffect } from "react";
import SearchCard from "./SearchCard";
import { useDispatch, useSelector } from "react-redux";
import { removeSearchResult } from "../../store/movieSlice";

const SearchResponseContainer = () => {
  const dispatch = useDispatch();
  const searchResult = useSelector((store) => store.movies.searchResult);
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  useEffect(() => {
    return () => {
      dispatch(removeSearchResult());
    };
  }, []);

  if (!searchResult)
    return (
      <div>
        <h1 className="relative ml-[20%] mt-10 text-xl font-semibold">
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
    <div>
        <h1 className="relative ml-[20%] mt-10 text-xl font-semibold">
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
