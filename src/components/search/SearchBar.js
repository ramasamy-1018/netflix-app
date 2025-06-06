import React, { useRef } from "react";
import { IonIcon } from "@ionic/react";
import { searchOutline } from "ionicons/icons";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addSearchResult } from "../../store/movieSlice";

const SearchBar = () => {
  const searchText = useRef(null);

  const dispatch = useDispatch();

  const getSearchResults = async () => {
    let string = searchText.current.value;

    let response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        string +
        "&include_adult=false&primary_release_year=2023&page=1",
      API_OPTIONS
    );
    let responseJson = await response?.json();
    dispatch(addSearchResult(responseJson?.results));
  };

  return (
    <div className="flex items-center justify-center pt-6 ml-16">
      <div className="relative">
        <input
          type="text"
          className="border-2 border-gray-300 bg-white text-black xl:w-80 lg:w-80 md:w-76 sm:w-76 w-60 h-10 px-5 pr-10 rounded-full text-lg"
          placeholder="Search for movies, tv shows"
          ref={searchText} />
        <button
          type="submit"
          className="absolute right-0 top-0 mt-2 mr-4"
          onClick={() => getSearchResults()}
        >
          <IonIcon
            className="w-6 h-6 hover:scale-110 text-black"
            icon={searchOutline}
          />
        </button>
      </div>
      {}
    </div>
  );
};

export default SearchBar;
