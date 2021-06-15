import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import close from "../../../assets/icons/close.svg";
import SideBarMainPage from "./SideBarMainPage";
import SideBarRequestPage from "./SideBarRequestPage";
const SideBar = ({ sideBarToggle }) => {
  const [sideBarPage, setSideBarPage] = useState("main");
  const mainAnimation = useSpring({
    to: {
      position: "absolute",
      width: "100%",
      height: "100%",
      display: sideBarPage === "main" ? "block" : "none",
      opacity: sideBarPage === "main" ? 1 : 0,
      y: sideBarPage === "main" ? 0 : -10,
    },
  });
  const requestAnimation = useSpring({
    to: {
      position: "absolute",
      width: "100%",
      height: "100%",
      display: sideBarPage === "request" ? "block" : "none",
      opacity: sideBarPage === "request" ? 1 : 0,
      y: sideBarPage === "request" ? 0 : -10,
    },
  });

  return (
    <div className="w-full h-full bg-darkGray relative flex flex-col items-center justify-center rounded-lg">
      <img
        className="absolute w-8 h-8 left-2 top-2 z-10 md:hidden"
        src={close}
        onClick={sideBarToggle}
      />
      <div className="w-full flex-1 relative ">
        <animated.div style={mainAnimation}>
          <SideBarMainPage setSideBarPage={setSideBarPage} />
        </animated.div>
        <animated.div style={requestAnimation}>
          <SideBarRequestPage setSideBarPage={setSideBarPage} />
        </animated.div>
      </div>
    </div>
  );
};

export default SideBar;
