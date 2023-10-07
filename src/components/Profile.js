import React from "react";
import profile1 from "../assets/images/profile1.png"
import profile2 from "../assets/images/profile2.png"
import profile3 from "../assets/images/profile3.jpg"
import { useNavigate } from "react-router-dom";


const Profile = () => {

  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-black text-white">
      <h1 className="mt-44 text-3xl font-semibold text-white">Who is Watching</h1>
      <div className="mt-10 pl-14 flex justify-center text-lg font-bold hover:cursor-pointer" >
        <div className="pr-12 hover:scale-110" onClick={()=>navigate("/")}>
          <img className="w-40 h-40" src={profile1} />
          <h1 className="text-center pt-2">Virat</h1>
        </div>
        <div className="pr-12 hover:scale-110" onClick={()=>navigate("/")}>
          <img className="w-40 h-40" src={profile2} />
          <h1 className="text-center pt-2">Rohit</h1>
        </div>
        <div className="pr-12 hover:scale-110" onClick={()=>navigate("/")}>
          <img className="w-40 h-40" src={profile3} />
          <h1 className="text-center pt-2">Mahi</h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
