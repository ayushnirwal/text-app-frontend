import useBreakPoints from "../../cutomHooks/useBreakPoints";
import MobileSideBar from "./MobileSideBar/MobileSideBar";
import DesktopSideBar from "./DesktopSideBar/DesktopSideBar";
const SideBar = () => {
  const device = useBreakPoints();
  if (device !== "phone") {
    return <DesktopSideBar />;
  }
  return <MobileSideBar />;
};

export default SideBar;
