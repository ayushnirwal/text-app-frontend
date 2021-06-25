import { useState } from "react";
import Bubbles from "../animations/Bubbles";
import useProfile from "../cutomHooks/useProfile";
import AvatarSelector from "../components/Profile/AvatarSelector";
import { useHistory } from "react-router";

const Settings = () => {
  const history = useHistory();

  const { profile, updateProfile } = useProfile();

  const [selectedAvatar, setSelectedAvatar] = useState(profile.avatarInd);
  const [name, setName] = useState(profile.name);

  const submitHandler = async (e) => {
    e.preventDefault();
    //TBD: checks on name and selected avatar in updateProfile defination and show errors
    try {
      await updateProfile(selectedAvatar, name);
      history.push("/");
    } catch (error) {}
  };

  return (
    <div className="w-screen h-screen bg-darkGray grid grid-cols-3 grid-rows-6 md:grid-cols-12 md:grid-rows-6 ">
      <div className="w-full h-full col-span-3 row-span-6 md:border-cream md:border-2 md:rounded-3xl md:col-start-3 md:row-start-2 md:col-span-8 md:row-span-4 md:grid md:grid-cols-8 md:grid-rows-4">
        <div className="hidden md:block col-span-2 row-span-6 border-r-2 border-cream">
          <Bubbles />
        </div>
        <div className="w-full md:col-span-6 md:row-span-6 flex flex-col items-center justify-start mt-24 md:mt-0 ">
          <AvatarSelector
            selectedAvatar={selectedAvatar}
            setSelectedAvatar={setSelectedAvatar}
          />
          <form
            className="w-9/12 md:w-7/12  flex flex-col items-center justify-center mt-3 "
            onSubmit={submitHandler}
          >
            <input
              className="w-full h-10 bg-cream rounded-full md:rounded-xl text-center text-darkGray my-2 focus:outline-none"
              placeholder="User Alias"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <input
              className="bg-green text-darkGray font-semibold w-6/12 h-10 rounded-full md:rounded-xl focus:outline-none my-2"
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
