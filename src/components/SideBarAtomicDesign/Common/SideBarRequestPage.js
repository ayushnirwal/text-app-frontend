import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import back_icon from "../../../assets/icons/back.svg";
import useFriends from "../../../cutomHooks/useFriends";
import useTheme from "../../../cutomHooks/useTheme";
import RequestCard, {
  REQUEST_TYPES,
} from "../../UI_atoms/RequestCard/RequestCard";
import Selector from "../../UI_atoms/Selector/Selector";

const SideBarRequestPage = ({ open, setSideBarPage }) => {
  const animation = useSpring({ to: { opacity: open ? 1 : 0 } });
  const { requests, acceptRequest, rejectRequest, deleteRequest } =
    useFriends();
  const { theme } = useTheme();
  const [showRequestType, setShowRequestType] = useState("Sent"); // "Sent" or "Received"
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

  const requestsGeneratorByType = (
    requests_list,
    type = REQUEST_TYPES.SENT
  ) => {
    if (!requests_list || !requests_list.length)
      return (
        <div
          className="w-full h-full bg-darkGray relative flex flex-col items-center justify-center md:rounded-lg "
          style={{ color: theme.color3 }}
        >
          {`No ${type} requests.`}
        </div>
      );
    return requests_list.map((request) => (
      <div className="my-3">
        <RequestCard
          name={request.name}
          email={request.email}
          avatarInd={request.avatarInd}
          type={type}
          onAccept={() => acceptRequest(request.email)}
          onReject={
            type === REQUEST_TYPES.SENT
              ? () => deleteRequest(request.email)
              : () => rejectRequest(request.email)
          }
        />
      </div>
    ));
  };

  return (
    <animated.div
      styles={animation}
      className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-6"
    >
      <img
        className="absolute w-8 h-8 left-6 top-6 z-10 bg-red rounded-full "
        src={back_icon}
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
            {requestsGeneratorByType(requests.sent, REQUEST_TYPES.SENT)}
          </div>
        </animated.div>
        <animated.div style={receivedAnimation}>
          <div className="w-full h-full overflow-scroll no-scroll-bar">
            {requestsGeneratorByType(requests.received, REQUEST_TYPES.RECEIVED)}
          </div>
        </animated.div>
      </div>
    </animated.div>
  );
};

export default SideBarRequestPage;
