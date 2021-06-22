import { useEffect, useState } from "react";
import { getBreakPoint } from "../utils/getBreakPoint";

const useBreakPoints = () => {
  const [device, setDevice] = useState(getBreakPoint(window.innerWidth));
  const handler = (width) => {
    setDevice(getBreakPoint(window.innerWidth));
  };
  useEffect(() => {
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  });

  return device;
};

export default useBreakPoints;
