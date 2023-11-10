import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import {
  peopleOutline,
  searchOutline,
  filmOutline,
  tvOutline,
  albumsOutline,
  peopleSharp,
  searchSharp,
  filmSharp,
  tvSharp,
  albumsSharp,
} from "ionicons/icons";

import { useNavigate,useLocation } from "react-router-dom";

const SideBar = ({ showMovies, ShowTv }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMouseEnter = (event, sharpIcon) => {
    event.currentTarget
      .querySelector("ion-icon")
      .setAttribute("icon", sharpIcon);
  };

  const handleMouseLeave = (event, outlineIcon) => {
    event.currentTarget
      .querySelector("ion-icon")
      .setAttribute("icon", outlineIcon);
  };

  return (
    <div className="absolute z-10">
      <div className="fixed 2xl:w-36 xl:w-36 lg:w-32 w-28 h-screen text-white text-sm font-light bg-gradient-to-b">
        <div className="h-1/4 flex flex-col items-center justify-center">
          <div className="hover:cursor-pointer" onClick={() => location.pathname !== "/movie" ?navigate("/movie"): null}>
          <p className="text-red-800 font-extrabold xl:text-2xl lg:text-xl md:text-lg sm:text-md">NETPLAY</p>
          </div>
          {/* <img
            className="2xl:w-28 2xl:h-20 xl:w-28 xl:h-20 lg:w-28 lg:h-20 w-20 h-16 pt-3 scale-110 hover:cursor-pointer"
            onClick={() => location.pathname !== "/movie" ?navigate("/movie"): null}
            src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456"
          /> */}
        </div>
        <div className="h-2/4 flex flex-col items-center justify-evenly mt-5">
          <div
            className="flex flex-col items-center group hover:cursor-pointer"
            onMouseEnter={(e) => handleMouseEnter(e, peopleSharp)}
            onMouseLeave={(e) => handleMouseLeave(e, peopleOutline)}
            onClick={() => navigate("/")}

          >
            <IonIcon className="w-6 h-6 group-hover:scale-125" icon={peopleOutline}/>
            <p className="py-2 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-opacity">
              Profile
            </p>
          </div>

          <div
            className="flex flex-col items-center group hover:cursor-pointer"
            onMouseEnter={(e) => handleMouseEnter(e, searchSharp)}
            onMouseLeave={(e) => handleMouseLeave(e, searchOutline)}
            onClick={() => navigate("/search")}

          >
            <IonIcon className="w-6 h-6 group-hover:scale-125" icon={searchOutline} />
            <p className="py-2 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-opacity">
              Search
            </p>
          </div>

          {showMovies && (
            <div
              className="flex flex-col items-center group hover:cursor-pointer"
              onMouseEnter={(e) => handleMouseEnter(e, filmSharp)}
              onMouseLeave={(e) => handleMouseLeave(e, filmOutline)}
              onClick={() => navigate("/movie")}
            >
              <IonIcon className="w-6 h-6 group-hover:scale-125" icon={filmOutline} />
              <p className="py-2 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-opacity">
                Movies
              </p>
            </div>
          )}
          {ShowTv && (
            <div
              className="flex flex-col items-center group hover:cursor-pointer"
              onMouseEnter={(e) => handleMouseEnter(e, tvSharp)}
              onMouseLeave={(e) => handleMouseLeave(e, tvOutline)}
              onClick={() => navigate("/tvshow")}

            >
              <IonIcon className="w-6 h-6 group-hover:scale-125" icon={tvOutline} />
              <p className="py-2 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-opacity">
                Tv Shows
              </p>
            </div>
          )}
          <div
            className="flex flex-col items-center group hover:cursor-pointer"
            onMouseEnter={(e) => handleMouseEnter(e, albumsSharp)}
            onMouseLeave={(e) => handleMouseLeave(e, albumsOutline)}
            onClick={() => navigate("/watchlist")}
          >
            <IonIcon className="w-6 h-6 group-hover:scale-125" icon={albumsOutline} />
            <p className="py-2 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-opacity">
              Watchlist
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
