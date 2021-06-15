import React from "react";
import { animated, useSpring } from "react-spring";

const SideBarRequestsPage = ({ open, setSideBarPage }) => {
  const animation = useSpring({ to: { opacity: open ? 1 : 0 } });
  return (
    <animated.div
      styles={animation}
      className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center"
    >
      <p> Request Page </p>
      <button
        className="w-32 h-8 my-2 md:mb-10 bg-red text-darkGray rounded-full md:rounded-xl focus:outline-none"
        onClick={() => setSideBarPage("main")}
      >
        Back
      </button>
    </animated.div>
  );
};

export default SideBarRequestsPage;
