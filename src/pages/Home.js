import { useState } from "react";
import { useHistory } from "react-router";
import Friends from "../components/Home/Friends";
import Info from "../components/Home/Info";
import MobileSideBarUI from "../components/Home/MobileSideBarUI";
import SideBar from "../components/Home/SideBar/SideBar";
import useBreakPoints from "../cutomHooks/useBreakPoints";
import useTheme from "../cutomHooks/useTheme";
import useUser from "../cutomHooks/useUser";

const Home = () => {
  const device = useBreakPoints();
  const history = useHistory();
  const { logout } = useUser();
  const { theme } = useTheme();
  return (
    <div className="w-screen h-screen bg-darkGray flex items-center justify-center">
      <div className=" w-full h-full md:w-10/12 md:h-5/6 md:border-cream md:border-2 rounded-lg ">
        <div className="md:hidden">
          <MobileSideBarUI />
        </div>
        <div className="hidden md:block relative w-3/12 h-full md:border-cream border-r-2">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default Home;
