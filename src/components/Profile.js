import React from "react";
import profile1 from "../assets/images/profile1.jpg";
import profile2 from "../assets/images/profile2.jpg";
import profile3 from "../assets/images/profile3.jpg";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black">
      <div className="p-5">
        <p className="text-red-800 font-extrabold xl:text-2xl lg:text-xl md:text-lg sm:text-md">
          NETPLAY
        </p>
      </div>
      <div className="pt-36 w-full h-screen flex flex-col items-center text-white">
        <h1 className="text-2xl font-semibold text-white">Who is Watching</h1>
        <div className="p-10 flex justify-evenly text-lg font-normal hover:cursor-pointer">
          <div
            className="pr-14 hover:scale-110 "
            onClick={() => navigate("/movie")}
          >
            <img
              className="xl:w-40 xl:h-40 lg:w-40 lg:h-40 md:w-40 md:h-40 w-36 h-32"
              src={profile1}
            />
            <h1 className="text-center pt-2">Virat</h1>
          </div>
          <div
            className="pr-14 hover:scale-110"
            onClick={() => navigate("/movie")}
          >
            <img
              className="xl:w-40 xl:h-40 lg:w-40 lg:h-40 md:w-40 md:h-40 w-36 h-32"
              src={profile2}
            />
            <h1 className="text-center pt-2">Rohit</h1>
          </div>
          <div className="hover:scale-110" onClick={() => navigate("/movie")}>
            <img
              className="xl:w-40 xl:h-40 lg:w-40 lg:h-40 md:w-40 md:h-40 w-36 h-32"
              src={profile3}
            />
            <h1 className="text-center pt-2">Mahi</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
