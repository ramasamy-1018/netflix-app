import React, { useEffect } from "react";
import SearchCard from "./SearchCard";
import { useDispatch, useSelector } from "react-redux";
import { removeSearchResult } from "../../store/movieSlice";

const SearchResponseContainer = () => {
  const dispatch = useDispatch();
  const searchResult = useSelector((store) => store.movies.searchResult);

  useEffect(() => {
    return () => {
      dispatch(removeSearchResult());
    };
  }, []);

  if (!searchResult) return null;

  return (
    <div className="fixed overflow-y-scroll no-scrollbar w-screen h-screen mt-10 flex flex-col">
      {searchResult.map((item) => (
        <SearchCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default SearchResponseContainer;
