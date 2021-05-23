import { useState } from "react";
import { useHistory } from "react-router";
import useTheme from "../../cutomHooks/useTheme";
import useUser from "../../cutomHooks/useUser";

const SignupForm = () => {
  const { signup } = useUser();
  const { theme } = useTheme();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const submithandler = async (e) => {
    e.preventDefault();
    try {
      await signup(username, email, password, cpassword);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={submithandler}
      className="w-full h-full flex flex-col items-end justify-center p-10"
    >
      <input
        style={{ background: theme.color1, color: theme.color3 }}
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        className="w-7/12 h-14 px-6 rounded-xl focus:outline-none text-right text-xl my-4"
        type="text"
        placeholder="Username"
      />
      <input
        style={{ background: theme.color1, color: theme.color3 }}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="w-7/12 h-14 px-6 rounded-xl focus:outline-none text-right text-xl my-4"
        type="email"
        placeholder="Email"
        autoComplete="email"
      />
      <input
        style={{ background: theme.color1, color: theme.color3 }}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className="w-7/12 h-14 px-6 rounded-xl focus:outline-none text-right text-xl my-4"
        type="password"
        placeholder="Password"
        autoComplete="new-password"
      />
      <input
        style={{ background: theme.color1, color: theme.color3 }}
        onChange={(e) => setcPassword(e.target.value)}
        value={cpassword}
        className="w-7/12 h-14 px-6 rounded-xl focus:outline-none text-right text-xl my-4"
        type="password"
        placeholder="Confirm Password"
        autoComplete="new-password"
      />
      <input
        style={{ background: theme.color3, color: theme.color1 }}
        className="px-6 py-2  rounded-xl focus:outline-none text-center text-xl my-4 font-bold"
        type="submit"
        value="Signup"
      />
    </form>
  );
};

export default SignupForm;
