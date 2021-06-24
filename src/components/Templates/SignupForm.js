import { useState } from "react";
import { useHistory } from "react-router";
import useBreakPoints from "../../cutomHooks/useBreakPoints";
import useTheme from "../../cutomHooks/useTheme";
import useUser from "../../cutomHooks/useUser";
import Button from "../UI_atoms/Button/Button";
import TextInput from "../UI_atoms/TextInput/TextInput";

const SignupForm = () => {
  const { signup } = useUser();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const submithandler = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password, cpassword);
      console.log("to settings");
      history.push("/settings");
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
            autoComplete="new-password"
          />
        </div>
        <div className="w-full h-10 my-3">
          <TextInput
            setValue={setcPassword}
            value={cpassword}
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="w-6/12 h-10 my-3">
          <Button onClick={submithandler}>Signup</Button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
