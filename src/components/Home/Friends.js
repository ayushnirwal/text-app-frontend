import { useEffect } from "react";
import useFriends from "../../cutomHooks/useFriends";
import useTheme from "../../cutomHooks/useTheme";
import AddFriend from "./Friend/AddFriend";

const Friends = () => {
  const { friends, requests, acceptRequest, rejectRequest, removeFriend } =
    useFriends();
  const { theme } = useTheme();

  return (
    <div className="w-full h-full px-4 flex flex-col">
      <h1 className="text-lg font-bold" style={{ color: theme.color3 }}>
        Your friends
      </h1>
      <div className="flex-1">
        {friends.map((friend, ind) => {
          return (
            <div
              key={ind}
              className="w-full h-12 flex items-center justify-start px-4 my-1 rounded-lg"
              style={{ backgroundColor: theme.color3 }}
            >
              <p className="w-full">{friend.name}</p>
              <button
                className="px-4 py-2 rounded-lg font-bold focus:outline-none mx-1 float-right"
                style={{ backgroundColor: theme.color1, color: theme.color3 }}
                onClick={() => removeFriend({ email: friend.email })}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
      <div className="w-full flex items-center justify-end">
        <AddFriend />
      </div>
    </div>
  );
};

export default Friends;
