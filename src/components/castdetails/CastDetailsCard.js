import React from "react";
import { IMAGE_CDN_URL } from "../../utils/constants";

const CastDetailsCard = ({name,poster}) => {

if(!poster || !name) return null

  return (
    <div
      className="w-44 mr-2 overflow-hidden"
    >
      <img className="hover:scale-105" src={IMAGE_CDN_URL + poster} />
      <p className="text-md font-bold text-center py-6">{name}</p>
    </div>
  );
};

export default CastDetailsCard;
