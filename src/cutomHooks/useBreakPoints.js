import { useState } from "react";
import { getBreakPoint } from "../utils/getBreakPoint";

const useBreakPoints = () => {
  const [device, setDevice] = useState(getBreakPoint(window.innerWidth));
  const handler = (width) => {
    setDevice(getBreakPoint(window.innerWidth));
  };
  window.addEventListener("resize", handler);
  return device;
};

export default useBreakPoints;
