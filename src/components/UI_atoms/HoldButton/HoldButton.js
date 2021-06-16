import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import useLongPress from "./useLongPress";

const HoldButton = ({
  timePeriod = 1000,
  children,
  onLongPress = () => {},
}) => {
  const [active, setActive] = useState(false);

  const fillAniamtion = useSpring({
    to: {
      width: !active ? "0%" : "100%",
      opacity: !active ? "0.4" : "0.6",
      pointerEvents: "none",
    },
    config: {
      duration: !active ? 100 : timePeriod,
    },
  });
  const onLongPressEnd = () => {
    setActive(false);
    console.log("do it");
    onLongPress();
  };

  const onClickEnd = () => {
    setActive(false);
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: timePeriod,
  };
  const onClickStart = () => {
    setActive(true);
  };
  const longPressEvent = useLongPress(
    onClickStart,
    onLongPressEnd,
    onClickEnd,
    defaultOptions
  );
  return (
    <button
      {...longPressEvent}
      className="bg-red text-darkGray font-semibold w-full h-full rounded-full md:rounded-xl focus:outline-none relative"
    >
      <animated.div
        style={fillAniamtion}
        className="h-full absolute bg-darkGray top-0 left-0"
      ></animated.div>
      {children}
    </button>
  );
};

export default HoldButton;
