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
      <div className="w-full my-24 md:h-full md:flex-1 flex flex-col justify-center items-center md:items-end">
        <input
          className="w-9/12 md:w-6/12 h-10 bg-cream rounded-full md:rounded-xl text-center text-darkGray my-3 md:my-3"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
          autoComplete="email"
        />
        <input
          className="w-9/12 md:w-6/12 h-10 bg-cream rounded-full md:rounded-xl  text-center text-darkGray my-3 md:my-3"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          autoComplete="current-password"
        />
      </div>
      <input
        className="mb-24 md:mb-10 bg-green text-darkGray font-semibold px-14 py-2 md:px-4 md:py-1 rounded-full md:rounded-xl"
        type="submit"
        value="Login"
      />
    </form>
  );
};

export default LoginForm;
