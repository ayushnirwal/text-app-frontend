import React from "react";
import { avatarList } from "../../../utils/consts";

const FriendCard = ({
  avatarInd = 0,
  name = "Generic Name",
  onClick = () => {},
}) => {
  return (
    <div
      className="w-full h-12 border-cream border-2 rounded-lg flex items-center justify-center text-cream px-3 cursor-pointer"
      onClick={onClick}
    >
      <div className="bg-green w-8 h-8 rounded-full mx-1">
        <img src={avatarList[avatarInd]} />
      </div>
      <p className="flex-1 h-full flex items-center justify-start mx-1 ">
        {name}
      </p>
    </div>
  );
};

export default FriendCard;
