import React from "react";
import avatar1 from "../../../assets/avatars/avatar1.svg";
import useUser from "../../../cutomHooks/useUser";
import HoldButton from "../../UI_atoms/HoldButton/HoldButton";

const SideBarMainPage = ({ setSideBarPage }) => {
  const { logout } = useUser();
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-6">
      <div className="w-full flex flex-col justify-center items-center">
        <img className="my-3 w-36 " src={avatar1} />
        <p className="text-cream mt-3 mb-8 text-lg">Amina Fallaci</p>
      </div>
      <div className="w-full flex-1 flex flex-col justify-center items-center"></div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex-1 flex  justify-center items-center">
          <button
            className="w-24 h-8 m-2 font-semibold bg-green text-darkGray rounded-full md:rounded-xl focus:outline-none "
            onClick={() => {
              setSideBarPage("request");
            }}
          >
            Requests
          </button>
          <button className="w-24 h-8 m-2 font-semibold bg-green text-darkGray rounded-full md:rounded-xl focus:outline-none">
            Settings
          </button>
        </div>

        <div className="w-32 h-8 my-2 ">
          <HoldButton onLongPress={logout}>Logout</HoldButton>
        </div>
      </div>
    </div>
  );
};

export default SideBarMainPage;
