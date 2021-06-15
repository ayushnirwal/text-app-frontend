import React from "react";
import { animated, useSpring } from "react-spring";
import avatar1 from "../../../assets/avatars/avatar1.svg";
import useUser from "../../../cutomHooks/useUser";
const SideBarMainPage = ({ setSideBarPage }) => {
  const { logout } = useUser();
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
      <img className="my-3 w-48 " src={avatar1} />
      <p className="text-cream mt-3 mb-8 text-lg">Amina Fallaci</p>
      <button
        className="w-32 h-8 my-2  bg-green text-darkGray rounded-full md:rounded-xl focus:outline-none "
        onClick={() => {
          setSideBarPage("request");
        }}
      >
        Requests
      </button>
      <button className="w-32 h-8 my-2 bg-green text-darkGray rounded-full md:rounded-xl focus:outline-none">
        Settings
      </button>
      <button
        className="w-32 h-8 my-2 bg-red text-darkGray rounded-full md:rounded-xl focus:outline-none"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default SideBarMainPage;
