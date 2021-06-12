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
      className="w-full h-full flex flex-col  items-center md:items-end justify-center md:pr-10"
    >
      <div className="w-full md:h-full md:flex-1 flex flex-col justify-center items-center md:items-end">
        <input
          className="w-9/12 md:w-7/12 h-10 md:h-14 bg-cream rounded-full md:rounded-xl md:text-xl text-center text-darkGray my-3 md:my-6"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
          autoComplete="email"
        />
        <input
          className="w-9/12 md:w-7/12 h-10 md:h-14 bg-cream rounded-full md:rounded-xl md:text-xl text-center text-darkGray my-3 md:my-6"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          autoComplete="current-password"
        />
      </div>
      <input
        className="my-24 md:my-10 md:text-xl bg-green text-darkGray font-bold px-14 py-2 md:px-6 md:py-3 rounded-full md:rounded-xl"
        type="submit"
        value="Login"
      />
    </form>
  );
};

export default LoginForm;
