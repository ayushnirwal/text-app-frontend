import { useHistory } from "react-router";
import Friends from "../components/Home/Friends";
import Info from "../components/Home/Info";
import useBreakPoints from "../cutomHooks/useBreakPoints";
import useTheme from "../cutomHooks/useTheme";
import useUser from "../cutomHooks/useUser";

const Home = () => {
  const device = useBreakPoints();
  const history = useHistory();
  const { logout } = useUser();
  const { theme } = useTheme();
  return (
    <div
      className={`w-screen h-screen ${
        device === "big-screen" || device === "small-screen" ? "p-10" : ""
      }`}
      style={{ backgroundColor: theme.color4 }}
    >
      <div
        className={`w-full h-full  rounded-2xl grid ${
          device === "big-screen" || device === "small-screen"
            ? "grid-cols-12 grid-rows-6"
            : "grid-cols-2 grid-rows-12"
        }`}
      >
        <div
          className={`w-full h-full flex flex-col overflow-hidden ${
            device === "big-screen" || device === "small-screen"
              ? "col-span-4 row-span-6 rounded-l-2xl"
              : "hidden"
          }`}
          style={{ backgroundColor: theme.color1 }}
        >
          <div className="w-full h-2/6 ">
            <Info />
          </div>
          <div className="w-full h-3/6 ">
            <Friends />
          </div>
          <div className="w-full h-1/6 flex items-center justify-center">
            <button
              className="bg-white px-4 py-2 rounded-lg font-bold mr-auto ml-4 focus:outline-none"
              style={{ backgroundColor: theme.color3, color: theme.color1 }}
              onClick={logout}
            >
              Logout
            </button>
            <button
              className="bg-white px-4 py-2 rounded-lg font-bold mr-4 ml-auto focus:outline-none"
              style={{ backgroundColor: theme.color3, color: theme.color1 }}
              onClick={() => history.push("/settings")}
            >
              Settings
            </button>
          </div>
        </div>
        <div
          className={`w-full h-full flex justify-center items-center ${
            device === "big-screen" || device === "small-screen"
              ? "col-span-8 row-span-6 rounded-r-2xl"
              : "col-span-12 row-span-6 "
          }`}
          style={{ backgroundColor: theme.color5 }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
