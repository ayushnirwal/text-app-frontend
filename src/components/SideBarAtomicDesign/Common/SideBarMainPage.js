import React from "react";
import useUser from "../../../cutomHooks/useUser";
import HoldButton from "../../UI_atoms/HoldButton/HoldButton";
import useProfile from "../../../cutomHooks/useProfile";
import { avatarList } from "../../../utils/consts";
import Friends from "../Common/Friends";
import { Link } from "react-router-dom";

const SideBarMainPage = ({ setSideBarPage }) => {
  const { logout } = useUser();
  const { profile } = useProfile();
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-6">
      <div className="w-full flex flex-col justify-center items-center">
        <img
          className="mt-3 w-36"
          src={profile.avatarInd && avatarList[profile.avatarInd]}
        />
        <p className="text-cream mt-1 text-lg">{profile.name}</p>
      </div>
      <div className="w-full flex-1 flex flex-col justify-center items-center">
        <Friends />
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex-1 flex justify-center items-center">
          <button
            className="w-24 h-8 m-2 font-semibold bg-green text-darkGray rounded-full md:rounded-xl focus:outline-none "
            onClick={() => {
              setSideBarPage("request");
            }}
          >
            Requests
          </button>
          <Link
            to="/settings"
            className="w-24 h-8 m-2 font-semibold bg-green text-darkGray rounded-full md:rounded-xl focus:outline-none flex items-center justify-center"
          >
            Settings
          </Link>
        </div>

        <div className="w-32 h-8 my-2 ">
          <HoldButton onLongPress={logout}>Logout</HoldButton>
        </div>
      </div>
    </div>
  );
};

export default SideBarMainPage;
