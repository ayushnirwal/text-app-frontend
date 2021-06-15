import React from "react";
const ChatBox = () => {
  return (
    <div className="w-full h-full border-cream border-2 md:border-0 rounded-lg flex flex-col">
      <div className="w-full h-16 border-cream border-b-2 flex items-center px-4">
        <div className="w-10 h-10 bg-green rounded-full "> </div>
        <p className="flex-1 px-4 text-cream"> Amina Fallaci </p>
        <button className="w-20 h-8 my-2 bg-red text-darkGray rounded-full font-semibold md:rounded-xl focus:outline-none">
          Remove
        </button>
      </div>
      <div className="w-full flex-1"></div>
      <div className="w-full h-16 border-cream border-t-2 flex items-center px-4">
        <p className="flex-1 text-cream"> Type Message Here.... </p>
        <button className="w-20 h-8 my-2 bg-green text-darkGray rounded-full font-semibold md:rounded-xl focus:outline-none">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
