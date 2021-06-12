import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
import { useState } from "react";
import Bubbles from "../animations/Bubbles";
import Selector from "../components/Login/Selector";
import LoginForm from "../components/Login/LoginForm";
import SignupForm from "../components/Login/SignupForm";
import useBreakPoints from "../cutomHooks/useBreakPoints";
import useTheme from "../cutomHooks/useTheme";

const Login = () => {
  const device = useBreakPoints();
  const [selected, setSelected] = useState("Login");
  const { theme } = useTheme();

  const loginFormAnimation = useSpring({
    to: {
      position: "absolute",
      width: "100%",
      height: "100%",
      display: selected === "Login" ? "block" : "none",
      opacity: selected === "Login" ? 1 : 0,
      y: selected === "Login" ? 0 : -10,
    },
  });
  const signupFormAnimation = useSpring({
    to: {
      position: "absolute",
      width: "100%",
      height: "100%",
      display: selected === "Signup" ? "block" : "none",
      opacity: selected === "Signup" ? 1 : 0,
      y: selected === "Signup" ? 0 : -10,
    },
  });

  return (
    <div className="w-screen h-screen bg-darkGray grid grid-cols-3 grid-rows-6 md:grid-cols-12 md:grid-rows-6 ">
      <div className="w-full h-full col-span-3 row-span-6 md:border-cream md:border-2 md:rounded-3xl md:col-start-3 md:row-start-2 md:col-span-8 md:row-span-4 md:grid md:grid-cols-8 md:grid-rows-4">
        <div className="hidden md:block col-span-2 row-span-6 border-r-2 border-cream">
          <Bubbles />
        </div>
        <div className="w-full h-full md:col-span-6 md:row-span-6 flex flex-col">
          <div className="w-full mt-16 md:mt-8 flex justify-center items-center md:justify-end">
            <Selector
              selected={selected}
              setSelected={setSelected}
              options={["Login", "Signup"]}
            />
          </div>
          <div className="w-full h-full flex-1 relative">
            <animated.div style={loginFormAnimation}>
              <LoginForm />
            </animated.div>
            <animated.div style={signupFormAnimation}>
              <SignupForm />
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
