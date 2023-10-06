import React from "react";
import SideBar from "../SideBar";
import WatchListContainer from "./WatchListContainer"

const WatchListPage = () => {
  return (
    <div className="w-screen h-screen bg-black text-white">
      <SideBar showMovies={true} ShowTv={true} />
      <WatchListContainer />
    </div>
  );
};

export default WatchListPage;
