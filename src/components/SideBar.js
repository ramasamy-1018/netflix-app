import React from "react";
import { IonIcon } from "@ionic/react";
import {
  peopleOutline,
  searchOutline,
  homeOutline,
  filmOutline,
  tvOutline,
} from "ionicons/icons";

const SideBar = () => {
  return (
    <div className="absolute h-full w-[100%] z-10">
      <div className="fixed w-28 h-screen text-white hover:cursor-pointer">
        <div className="w-28 h-1/4 flex flex-col pt-2 items-center">
        <img
          className="w-32 h-20"
          src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456"
        />
        </div>
        <div className="items-center flex flex-col justify-evenly h-2/4">
          <IonIcon className="w-6 h-6" icon={peopleOutline} />
          <IonIcon className="w-6 h-6" icon={searchOutline} />
          <IonIcon className="w-6 h-6" icon={homeOutline} />
          <IonIcon className="w-6 h-6" icon={filmOutline} />
          <IonIcon className="w-6 h-6" icon={tvOutline} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
