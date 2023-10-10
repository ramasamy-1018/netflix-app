import React from "react";
import SideBar from "../components/SideBar";

const Shimmer = () => {
  return (
    <div>
      <div className="relative h-screen p-6">
        <div className="relative h-full rounded-lg bg-gray-400 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Shimmer;
