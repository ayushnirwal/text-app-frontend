import useFriends from "../../../../cutomHooks/useFriends";
import useUser from "../../../../cutomHooks/useUser";
import AddFriend from "../../../UI_atoms/FriendCard/AddFriend";
import RequestCard from "../../../UI_atoms/RequestCard/RequestCard";

const Friends = () => {
  const { user } = useUser();
  const { removeFriend } = useFriends();
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full no-scroll-bar mb-1">
        <AddFriend />
      </div>
      <div className="w-full h-full overflow-scroll no-scroll-bar">
        {user.friends.map((friend) => (
          <RequestCard
            name={friend.name}
            email={friend.email}
            avatarInd={friend.avatarInd}
            onReject={() => removeFriend(friend.email)}
          />
        ))}
      </div>
    </div>
  );
};

export default Friends;
