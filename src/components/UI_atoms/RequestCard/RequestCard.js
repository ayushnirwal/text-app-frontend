import React from "react";
import { avatarList } from "../../../utils/consts";
import accept from "../../../assets/icons/accept.svg";
import reject from "../../../assets/icons/close.svg";
import HoldButton from "../HoldButton/HoldButton";

export const REQUEST_TYPES = {
  SENT: "sent",
  RECEIVED: "received",
};

const RequestCard = ({
  avatarInd = "0",
  name = "Generic Name",
  type = REQUEST_TYPES.SENT,
  email = "placeholdermail@bhai.com",
  onAccept = () => {},
  onReject = () => {},
}) => {
  return (
    <div className="w-full h-12 border-cream border-2 rounded-full flex items-center justify-center text-cream px-3">
      <div className="bg-green w-8 h-8 rounded-full mx-1">
        <img alt="avatar" src={avatarList[avatarInd]} />
      </div>
      <p className="flex-1 h-full flex items-center justify-start mx-1 ">
        {name}
      </p>
      {type === REQUEST_TYPES.RECEIVED && (
        <img className="w-6 h-6 mx-1" src={accept} onClick={onAccept} />
      )}
      <div className="w-6 h-6 mx-1 rounded-full overflow-hidden">
        <HoldButton onLongPress={onReject}>
          <img src={reject} />
        </HoldButton>
      </div>
    </div>
  );
};

export default RequestCard;
