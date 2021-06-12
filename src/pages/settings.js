import { useEffect, useState } from "react";
import Bubbles from "../animations/Bubbles";
import useUser from "../cutomHooks/useUser";
import AvatarSelector from "../components/Profile/AvatarSelector";

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
        <div className="w-full h-full md:col-span-6 md:row-span-6  flex flex-col items-center justify-center py-10">
          <AvatarSelector
            selectedAvatar={selectedAvatar}
            setSelectedAvatar={setSelectedAvatar}
          />
          <form className=" w-full flex flex-col items-center justify-center ">
            <input
              className="w-9/12 md:w-7/12 h-10 bg-cream rounded-full md:rounded-xl  text-center text-darkGray my-3 md:my-3 focus:outline-none"
              placeholder="User Alias"
            />

            <input
              className="mb-24 md:mb-10 bg-green text-darkGray font-semibold px-14 py-2 md:px-4 md:py-1 rounded-full md:rounded-xl focus:outline-none"
              type="submit"
              value="Apply Changes"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
