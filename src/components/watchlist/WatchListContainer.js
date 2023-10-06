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
    <div className="fixed overflow-y-scroll w-screen h-screen px-40 py-10">
      {watchlist.length ? (
        <div>
          <div className="flex ml-32 items-center">
            <h1 className="text-2xl font-sans font-bold">Your Watchlist</h1>
            <button
              className="text-md font-sans font-bold w-30 h-12 ml-[62%] p-2 bg-gray-500 rounded-lg"
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
          <h1 className="text-2xl font-sans font-bold flex justify-center items-center pt-72">
            Your Watchlist is empty
          </h1>
        </>
      )}
    </div>
  );
};

export default WatchListConntainer;
