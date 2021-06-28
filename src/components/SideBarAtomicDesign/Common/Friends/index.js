import AddFriend from "../../../UI_atoms/FriendCard/AddFriend";
import FriendsList from "./FriendsList";
const Friends = () => {
  return (
    <div className="w-full h-full overflow-scroll no-scroll-bar mt-3 flex flex-col">
      <p className="text-cream w-full text-lg"> Your friends </p>
      <div className="w-full flex-1">
        <FriendsList />
      </div>
      <AddFriend />
    </div>
  );
};

export default Friends;
