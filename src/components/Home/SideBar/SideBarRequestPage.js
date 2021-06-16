import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import close_icon from "../../../assets/icons/close.svg";
import RequestCard from "../../UI_atoms/RequestCard/RequestCard";
import Selector from "../../UI_atoms/Selector/Selector";

const SideBarRequestsPage = ({ open, setSideBarPage }) => {
  const animation = useSpring({ to: { opacity: open ? 1 : 0 } });
  const [showRequestType, setShowRequestType] = useState("Sent"); // "Sent" or "Received"
  const close = () => {};
  const back = () => {
    setSideBarPage("main");
  };
  const sentAnimation = useSpring({
    to: {
      position: "absolute",
      width: "100%",
      height: "100%",
      display: showRequestType === "Sent" ? "block" : "none",
      opacity: showRequestType === "Sent" ? 1 : 0,
      y: showRequestType === "Sent" ? 0 : -10,
    },
  });
  const receivedAnimation = useSpring({
    to: {
      position: "absolute",
      width: "100%",
      height: "100%",
      display: showRequestType === "Received" ? "block" : "none",
      opacity: showRequestType === "Received" ? 1 : 0,
      y: showRequestType === "Received" ? 0 : -10,
    },
  });
  return (
    <animated.div
      styles={animation}
      className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-3"
    >
      <img
        className="absolute w-8 h-8 left-2 top-2 z-10 md:hidden"
        src={close_icon}
        onClick={close}
      />
      <img
        className="absolute w-8 h-8 right-2 top-2 z-10 "
        src={close_icon}
        onClick={back}
      />
      <Selector
        selected={showRequestType}
        setSelected={setShowRequestType}
        options={["Sent", "Received"]}
      />
      <div className="w-full h-4/6 relative mt-3">
        <animated.div style={sentAnimation}>
          <div className="w-full h-full overflow-scroll no-scroll-bar">
            <div className="my-3">
              <RequestCard type="sent" />
            </div>
            <div className="my-3">
              <RequestCard type="sent" />
            </div>
            <div className="my-3">
              <RequestCard type="sent" />
            </div>
            <div className="my-3">
              <RequestCard type="sent" />
            </div>
          </div>
        </animated.div>
        <animated.div style={receivedAnimation}>
          <div className="w-full h-full overflow-scroll no-scroll-bar">
            <div className="my-3">
              <RequestCard type="received" />
            </div>
            <div className="my-3">
              <RequestCard type="received" />
            </div>
            <div className="my-3">
              <RequestCard type="received" />
            </div>
            <div className="my-3">
              <RequestCard type="received" />
            </div>
          </div>
        </animated.div>
      </div>
    </animated.div>
  );
};

export default SideBarRequestsPage;
