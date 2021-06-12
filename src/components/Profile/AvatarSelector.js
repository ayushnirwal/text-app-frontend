import { useSprings, animated } from "react-spring";
import avatar1 from "../../assets/avatars/avatar1.svg";
import avatar2 from "../../assets/avatars/avatar2.svg";
import avatar3 from "../../assets/avatars/avatar3.svg";
import avatar4 from "../../assets/avatars/avatar4.svg";

const avatarList = [avatar1, avatar2, avatar3, avatar4];
const AvatarSelector = ({ selectedAvatar, setSelectedAvatar }) => {
  const [imageAnimations, api] = useSprings(avatarList.length, (ind) => ({
    to: {
      opacity: 0,
    },
  }));
  const changeSelectedAvatar = (ind) => {
    setSelectedAvatar(ind);
    api.start((index) => ({
      to: { opacity: ind === index ? 1 : 0 },
    }));
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-56 h-56 my-6 relative">
        <div className="w-full h-full absolute animate-appear bg-green rounded-full" />
        {avatarList &&
          avatarList.map((avatar, ind) => (
            <animated.img
              style={imageAnimations[ind]}
              className="w-full h-full absolute"
              key={ind}
              src={avatar}
            />
          ))}
      </div>
      <div className=" w-full flex items-center justify-center px-6">
        {avatarList &&
          avatarList.map((avatar, ind) => (
            <div key={ind} className="w-20 h-20 mx-2 ">
              <img
                className="w-full h-full"
                src={avatar}
                onClick={() => {
                  changeSelectedAvatar(ind);
                }}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default AvatarSelector;
