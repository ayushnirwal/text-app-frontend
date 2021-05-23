import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
import { useState } from "react";
import Bubbles from "../animations/Bubbles";
import LoginForm from "../components/Login/LoginForm";
import SignupForm from "../components/Login/SignupForm";
import useBreakPoints from "../cutomHooks/useBreakPoints";
import useTheme from "../cutomHooks/useTheme";

const Login = () => {
  const device = useBreakPoints();
  const [selected, setSelected] = useState("Login");
  const { theme } = useTheme();
  const selectAnimation = useSpring({
    to: {
      width: selected === "Login" ? "5rem" : "5rem",
      height: "0.2rem",
      bottom: "-0.5rem",
      right: selected === "Login" ? "14.5rem" : "5rem",
      backgroundColor: theme.color3,
    },
    config: {
      mass: 3,
      tension: 300,
    },
  });
  const LoginFormAnimation = useSpring({
    to: {
      position: "absolute",
      display: selected === "Login" ? "block" : "none",
      opacity: selected === "Login" ? 1 : 0,
      y: selected === "Login" ? 0 : -10,
    },
  });
  const SignupFormAnimation = useSpring({
    to: {
      position: "absolute",
      display: selected === "Signup" ? "block" : "none",
      opacity: selected === "Signup" ? 1 : 0,
      y: selected === "Signup" ? 0 : -10,
    },
  });

  return (
    <div
      className={`w-screen h-screen overflow-hidden ${
        device === "big-screen" ||
        device === "small-screen" ||
        device === "tablet"
          ? "p-16"
          : ""
      }`}
      style={{ backgroundColor: theme.color4 }}
    >
      <div
        className={`w-full h-full grid ${
          device === "big-screen" || device === "small-screen"
            ? "grid-cols-12 grid-rows-6"
            : "grid-cols-2 grid-rows-12"
        }`}
      >
        <div
          className={`${
            device === "big-screen" || device === "small-screen"
              ? "col-span-4 row-span-6 w-full h-full bg-red-200 flex justify-center items-center rounded-l-2xl"
              : "hidden"
          }`}
          style={{ backgroundColor: theme.color1 }}
        >
          <Bubbles />
        </div>
        <div
          className={` w-full h-full flex flex-col justify-start items-center ${
            device === "big-screen" || device === "small-screen"
              ? "col-span-8 row-span-6 rounded-r-2xl "
              : "col-span-12 row-span-6 rounded-2xl "
          }`}
          style={{ backgroundColor: theme.color5 }}
        >
          <div className="w-full flex justify-end items-center px-10 relative mt-10">
            <p
              className="mx-10 text-2xl font-bold cursor-pointer"
              style={{ color: theme.color3 }}
              onClick={() => setSelected("Login")}
            >
              Login
            </p>
            <p
              className="mx-10 text-2xl font-bold cursor-pointer"
              style={{ color: theme.color3 }}
              onClick={() => setSelected("Signup")}
            >
              Signup
            </p>
            <animated.div
              className="absolute"
              style={selectAnimation}
            ></animated.div>
          </div>
          <div className="flex-1 w-full relative">
            <animated.div style={LoginFormAnimation} className="w-full h-full">
              <LoginForm />
            </animated.div>
            <animated.div style={SignupFormAnimation} className="w-full h-full">
              <SignupForm />
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
