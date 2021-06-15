import { useState } from "react";
import { useHistory } from "react-router";
import ChatBox from "../components/Home/ChatBox/ChatBox";
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
      <div className=" w-full h-full md:w-10/12 md:h-5/6 md:border-cream md:border-2 rounded-lg flex flex-col md:grid md:grid-cols-12 md:grid-rows-6">
        <div className="md:hidden">
          <MobileSideBarUI />
        </div>
        <div className="hidden md:block relative h-full md:border-cream border-r-2 md:col-span-3 md:row-span-6">
          <SideBar />
        </div>
        <div className="flex-1 px-5 pt-5 pb-20 md:p-0 md:col-span-9 md:row-span-6">
          <ChatBox />
        </div>
      </div>
    </div>
  );
};

export default Home;
