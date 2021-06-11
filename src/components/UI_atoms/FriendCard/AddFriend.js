import { useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import add_friend from "../../../assets/icons/add_friend.svg";
import TextInput from "../TextInput/TextInput";
import useFriends from "../../../cutomHooks/useFriends";

const AddFriend = () => {
  const [expanded, setExpanded] = useState(false);
  const [friendEmail, setFriendEmail] = useState("");
  const { sendRequest } = useFriends();
  const fieldChangeHandler = useCallback(
    (e) => {
      e.preventDefault();
      if (e.key === "Enter") {
        console.log(friendEmail);
        setFriendEmail("");
        sendRequest(friendEmail);
      }
    },
    [friendEmail]
  );
  const expandAnimation = useSpring({
    to: {
      width: expanded ? "100%" : "0%",
      position: "absolute",
      height: "100%",
    },
  });
  const rotateAnimation = useSpring({
    to: {
      transform: expanded ? "rotate(45deg)" : "rotate(0deg)",
    },
  });
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="w-full h-10 flex items-center relative">
      <animated.div
        style={expandAnimation}
        className="bg-cream top-0 right-0 rounded-xl"
      >
        <TextInput
          setValue={setFriendEmail}
          onKeyUp={fieldChangeHandler}
          value={friendEmail}
          type="email"
          placeholder="Add Email"
        />
      </animated.div>
      <animated.img
        style={rotateAnimation}
        src={add_friend}
        className="absolute right-0 top-0 z-10 w-8 mt-1"
        onClick={toggleExpand}
      />
    </div>
  );
};

export default AddFriend;
