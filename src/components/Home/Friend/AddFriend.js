import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
import { useRef, useState, useCallback } from "react";
import useTheme from "../../../cutomHooks/useTheme";
import { IoAddCircleSharp, IoCloseCircle } from "react-icons/io5";
import useFriends from "../../../cutomHooks/useFriends";

const AddFriend = () => {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const inputRef = useRef();
  const { sendRequest, getPendingRequests } = useFriends();

  const addFriend = (e) => {
    e.preventDefault();
    inputRef.value = "";
    sendRequest({ email: inputRef.current.value });
  };

  const animation = useSpring({
    to: {
      width: open ? "100%" : "11%",
      height: "50px",
      borderRadius: "10px",
      backgroundColor: theme.color3,
    },
  });
  const closeIconAnimation = useSpring({
    to: {
      transform: open ? "rotate(0deg)" : "rotate(45deg)",
    },
  });

  return (
    <animated.div
      style={animation}
      onClick={() => {
        if (!open) {
          setOpen(true);
          inputRef.current.focus();
        }
      }}
      className="flex items-center justify-center overflow-hidden"
    >
      <div className=" w-full h-full flex items-center justify-center overflow-hidden px-2">
        <form onSubmit={addFriend}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Add any user's email to send request"
            className="focus:outline-none w-full h-full px-2"
            style={{
              backgroundColor: "red",
              opacity: open ? 1 : 0,
            }}
          />
          <input type="submit" />
        </form>
        <animated.div
          style={closeIconAnimation}
          onClick={() => (open ? setOpen(false) : "")}
        >
          <IoCloseCircle className="text-3xl" />
        </animated.div>
      </div>
    </animated.div>
  );
};

export default AddFriend;
