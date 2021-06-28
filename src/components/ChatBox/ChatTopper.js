import { avatarList } from "../../utils/consts";

const ChatTopper = ({ selectedFriend }) => {
  return (
    <div className="w-full h-16 border-cream border-b-2 flex items-center justify-start px-10">
      <img className="w-12 mr-4" src={avatarList[selectedFriend.avatarInd]} />
      <p className="text-cream text-xl">{selectedFriend.name}</p>
    </div>
  );
};

export default ChatTopper;
