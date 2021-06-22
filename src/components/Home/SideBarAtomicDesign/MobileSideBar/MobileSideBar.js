import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import burger_menu from "../../../../assets/icons/burger_menu.svg";

import SideBar from "../DesktopSideBar/DesktopSideBar";
const MobileSideBar = () => {
  const [sideBarState, setSideBarState] = useState("close");

  const sideBarAnimation = useSpring({
    to: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      clipPath:
        sideBarState === "open"
          ? "circle(140% at 0% 0%)"
          : "circle(0% at 0% 0%)",
    },
  });
  const sideBarToggle = () => {
    switch (sideBarState) {
      case "open":
        setSideBarState("close");
        break;
      case "close":
        setSideBarState("open");
        break;

      default:
        break;
    }
  };
  return (
    <div className="w-full h-12 bg-cream flex items-center justify-start px-3">
      <img className="w-8" src={burger_menu} onClick={sideBarToggle} />
      <animated.div style={sideBarAnimation}>
        <SideBar sideBarToggle={sideBarToggle} />
      </animated.div>
    </div>
  );
};

export default MobileSideBar;
