import React from "react";
import { avatarList } from "../../../utils/consts";
import accept from "../../../assets/icons/accept.svg";
import reject from "../../../assets/icons/close.svg";
import HoldButton from "../HoldButton/HoldButton";

const FriendCard = ({
  avatarInd = "0",
  name = "Generic Name",
  type = "sent",
}) => {
  return (
    <div className="w-full h-12 border-cream border-2 rounded-full flex items-center justify-center text-cream px-3">
      <div className="bg-green w-8 h-8 rounded-full mx-1">
        <img src={avatarList[avatarInd]} />
      </div>
      <p className="flex-1 h-full flex items-center justify-start mx-1 ">
        {name}
      </p>
      {type === "received" && <img className="w-6 h-6 mx-1" src={accept} />}
      <div className="w-6 h-6 mx-1 rounded-full overflow-hidden">
        <HoldButton>
          <img src={reject} />
        </HoldButton>
      </div>
    </div>
  );
};

export default FriendCard;
