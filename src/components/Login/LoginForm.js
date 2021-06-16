import { useState } from "react";
import { useHistory } from "react-router";
import useBreakPoints from "../../cutomHooks/useBreakPoints";
import useTheme from "../../cutomHooks/useTheme";
import useUser from "../../cutomHooks/useUser";
import HoldButton from "../UI_atoms/HoldButton/HoldButton";
import TextInput from "../UI_atoms/TextInput/TextInput";

const LoginForm = () => {
  const { theme } = useTheme();
  const device = useBreakPoints();
  const history = useHistory();
  const { login } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const submithandler = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      history.push("/");
    } catch (error) {
      if (error.message.includes(400)) {
        setErrorMsg("Email or password incorrect");
      } else if (error.message.includes("Network Error")) {
        setErrorMsg("It seems the server is down");
      } else {
        throw error;
      }
    }
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-start md:justify-center">
      <div className="w-9/12 md:w-6/12 h-12 mt-36 md:mt-0 mb-3 ">
        {errorMsg !== "" ? (
          <div className=" w-full h-full rounded-full md:rounded-lg text-center text-red border-red border-2  py-2 animate-appear ">
            {errorMsg}
          </div>
        ) : (
          ""
        )}
      </div>
      <form
        onSubmit={submithandler}
        className=" w-9/12 md:w-6/12 flex flex-col items-center justify-center"
      >
        <TextInput
          setValue={setEmail}
          value={email}
          type="text"
          placeholder="Email"
          autoComplete="email"
        />
        <TextInput
          setValue={setPassword}
          value={password}
          type="password"
          placeholder="Password"
          autoComplete="current-password"
        />

        <HoldButton onClick={submithandler}>Login</HoldButton>
      </form>
    </div>
  );
};

export default LoginForm;
