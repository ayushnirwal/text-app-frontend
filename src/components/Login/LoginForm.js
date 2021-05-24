import { useState } from "react";
import { useHistory } from "react-router";
import useBreakPoints from "../../cutomHooks/useBreakPoints";
import useTheme from "../../cutomHooks/useTheme";
import useUser from "../../cutomHooks/useUser";

const LoginForm = () => {
  const { theme } = useTheme();
  const device = useBreakPoints();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUser();
  const submithandler = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={submithandler}
      className={`w-full h-full flex flex-col justify-center p-10 ${
        device === "big-screen" || device === "small-screen"
          ? "items-end"
          : "items-center"
      }`}
    >
      <input
        style={{ background: theme.color1, color: theme.color3 }}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className={`${
          device === "big-screen" || device === "small-screen"
            ? "w-7/12 text-right"
            : "w-10/12 text-center"
        } h-14 px-6 rounded-xl focus:outline-none  text-xl my-4`}
        type="email"
        placeholder="Email"
        autoComplete="email"
      />
      <input
        style={{ background: theme.color1, color: theme.color3 }}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className={`${
          device === "big-screen" || device === "small-screen"
            ? "w-7/12 text-right"
            : "w-10/12 text-center"
        } h-14 px-6 rounded-xl focus:outline-none  text-xl my-4`}
        type="password"
        placeholder="Password"
        autoComplete="current-password"
      />
      <input
        style={{ background: theme.color3, color: theme.color1 }}
        className=" px-6 py-2 rounded-xl focus:outline-none text-center text-xl my-4 font-bold"
        type="submit"
        value="Login"
      />
    </form>
  );
};

export default LoginForm;
