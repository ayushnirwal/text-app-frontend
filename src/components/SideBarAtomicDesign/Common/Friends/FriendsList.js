import React from "react";
import { useDispatch } from "react-redux";
import useFriends from "../../../../cutomHooks/useFriends";
import { setSelectedFriend } from "../../../../redux/user/userSlice";
import FriendCard from "../../../UI_atoms/FriendCard/FriendCard";
const FriendsList = () => {
  const { friends } = useFriends();
  const dispatch = useDispatch();

  return (
    <div className="w-full h-full ">
      {friends &&
        friends.map((friend, ind) => (
          <FriendCard
            key={ind}
            name={friend.name}
            avatarInd={friend.avatarInd}
            onClick={() => {
              dispatch(setSelectedFriend(friend));
            }}
          />
        ))}
    </div>
  );
};

export default FriendsList;
