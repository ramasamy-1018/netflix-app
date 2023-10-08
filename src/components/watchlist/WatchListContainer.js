import React from "react";
import { useDispatch, useSelector } from "react-redux";
import WatchlistCard from "./WatchlistCard";
import { clearWatchList } from "../../store/watchlistSlice";

const WatchListConntainer = () => {
  const dispatch = useDispatch();
  const watchlist = useSelector((store) => store.watchlist.watchlistArray);

  if (!watchlist) return null;

  const handleClear = () => {
    dispatch(clearWatchList());
  };

  return (
    <div className="fixed w-full h-screen overflow-y-scroll no-scrollbar pl-44 pt-10 text-white bg-black">
      <div className="m-auto flex flex-col items-center h-screen pr-20">
        {watchlist.length ? (
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-sans font-bold">Your Watchlist</h1>
              <button
                className="text-md font-sans font-bold w-30 h-14 p-1 bg-gray-500 rounded-lg"
                onClick={handleClear}
              >
                Clear Watchlist
              </button>
            </div>
              <div className="flex flex-col">
                {watchlist.map((item) => (
                  <WatchlistCard key={item.id} item={item} />
                ))}
              </div>
            </div>
        ) : (
          <>
            <h1 className="text-2xl font-sans font-bold pt-72 pr-40">
              Your Watchlist is empty
            </h1>
          </>
        )}
      </div>
    </div>
  );
};

export default WatchListConntainer;
