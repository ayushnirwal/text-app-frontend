import { useState } from "react";
import { useHistory } from "react-router";
import useBreakPoints from "../../cutomHooks/useBreakPoints";
import useTheme from "../../cutomHooks/useTheme";
import useUser from "../../cutomHooks/useUser";

const SignupForm = () => {
  const { signup } = useUser();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const submithandler = async (e) => {
    e.preventDefault();
    console.log(email, password, cpassword);
  };
  return (
    <form
      onSubmit={submithandler}
      className="w-full h-full flex flex-col  items-center justify-center md:pr-10"
    >
      <div className="w-full my-20 md:h-full md:flex-1 flex flex-col justify-center items-center">
        <input
          className="w-9/12 md:w-6/12 h-10 bg-cream rounded-full md:rounded-xl text-center text-darkGray my-3 md:my-3 focus:outline-none"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
          autoComplete="email"
        />
        <input
          className="w-9/12 md:w-6/12 h-10 bg-cream rounded-full md:rounded-xl  text-center text-darkGray my-3 md:my-3 focus:outline-none"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          autoComplete="new-password"
        />
        <input
          className="w-9/12 md:w-6/12 h-10 bg-cream rounded-full md:rounded-xl  text-center text-darkGray my-3 md:my-3 focus:outline-none"
          onChange={(e) => setcPassword(e.target.value)}
          value={cpassword}
          type="password"
          placeholder="Confirm Password"
          autoComplete=""
        />
      </div>
      <input
        className="mb-24 md:mb-10 bg-green text-darkGray font-semibold px-14 py-2 md:px-4 md:py-1 rounded-full md:rounded-xl focus:outline-none"
        type="submit"
        value="Signup"
      />
    </form>
  );
};

export default SignupForm;
