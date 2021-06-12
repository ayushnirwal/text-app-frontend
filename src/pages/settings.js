import { useEffect, useState } from "react";
import Bubbles from "../animations/Bubbles";
import useUser from "../cutomHooks/useUser";
import avatar1 from "../assets/avatars/avatar1.svg";
import avatar2 from "../assets/avatars/avatar2.svg";
import avatar3 from "../assets/avatars/avatar3.svg";
import avatar4 from "../assets/avatars/avatar4.svg";

const Settings = () => {
  const { user } = useUser();
  const avatarInd = user.profilePicLink;
  const [selectedAvatar, setSelectedAvatar] = useState(avatarInd);
  return (
    <div className="w-screen h-screen bg-darkGray grid grid-cols-3 grid-rows-6 md:grid-cols-12 md:grid-rows-6 ">
      <div className="w-full h-full col-span-3 row-span-6 md:border-cream md:border-2 md:rounded-3xl md:col-start-3 md:row-start-2 md:col-span-8 md:row-span-4 md:grid md:grid-cols-8 md:grid-rows-4">
        <div className="hidden md:block col-span-2 row-span-6 border-r-2 border-cream">
          <Bubbles />
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="w-56 h-56 my-6 ">
            <img className="w-full h-full" src={avatar1} />
          </div>
          <div className=" w-full flex items-center justify-center px-6">
            <div className="w-20 h-20 mx-2 ">
              <img className="w-full h-full" src={avatar1} />
            </div>
            <div className="w-20 h-20 mx-2 ">
              <img className="w-full h-full" src={avatar2} />
            </div>
            <div className="w-20 h-20 mx-2 ">
              <img className="w-full h-full" src={avatar3} />
            </div>
            <div className="w-20 h-20 mx-2 ">
              <img className="w-full h-full" src={avatar4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
