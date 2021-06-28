import React from "react";
import useUser from "../../cutomHooks/useUser";
import ChatBottom from "./ChatBottom";
import ChatTopper from "./ChatTopper";
const ChatBox = () => {
  const { user } = useUser();
  const { selectedFriend } = user;
  if (selectedFriend) {
    return (
      <div className="w-full h-full flex flex-col">
        <ChatTopper selectedFriend={selectedFriend} />
        <div className="flex-1"></div>
        <ChatBottom />
      </div>
    );
  } else {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-cream text-xl">
          Click on a friend to start chatting
        </h1>
      </div>
    );
  }
};

export default ChatBox;
