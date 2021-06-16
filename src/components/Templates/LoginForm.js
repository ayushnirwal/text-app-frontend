import { useState } from "react";
import { useHistory } from "react-router";
import useBreakPoints from "../../cutomHooks/useBreakPoints";
import useTheme from "../../cutomHooks/useTheme";
import useUser from "../../cutomHooks/useUser";
import Button from "../UI_atoms/Button/Button";
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
      //history.push("/");
    } catch (error) {
      if (error.name === "inputError") {
        setErrorMsg(error.message);
      } else if (error.name === "requestError") {
        setErrorMsg(error.message);
      } else if (error.message.includes("Network Error")) {
        setErrorMsg("It seems the server is down");
      } else {
        throw error;
      }
    }
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-start md:justify-center">
      <div className="w-9/12 md:w-6/12 h-10 mt-36 md:mt-0 mb-3 ">
        {errorMsg !== "" ? (
          <div className=" w-full h-full rounded-full md:rounded-lg text-center text-red border-red border-2 animate-appear flex items-center justify-center">
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
        <div className="w-full h-10 my-3">
          <TextInput
            setValue={setEmail}
            value={email}
            type="text"
            placeholder="Email"
            autoComplete="email"
          />
        </div>

        <div className="w-full h-10 my-3">
          <TextInput
            setValue={setPassword}
            value={password}
            type="password"
            placeholder="Password"
            autoComplete="current-password"
          />
        </div>
        <div className="w-6/12 h-10 my-3">
          <Button onClick={submithandler}>Login</Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
