import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { populateUser, setSelectedFriend } from "../redux/user/userSlice";
import { serverString } from "../utils/config";
import { isNill } from "../utils/helpers";

const useUser = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const login = async (email, password) => {
    const url = serverString + "api/signin";

    try {
      if (!email) {
        throw { name: "inputError", message: "Email Required" };
      }
      if (!password) {
        throw { name: "inputError", message: "Password Required" };
      }
      const loginRes = await axios.post(url, { email, password });

      const res = await axios.get(serverString + "api/userDetails", {
        headers: { Authorization: "Bearer " + loginRes.data.token },
      });

      const userObj = res.data;
      userObj.token = loginRes.data.token;
      userObj.loggedIn = true;

      dispatch(populateUser(userObj));
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          console.log(error.response.data);
          throw { name: "requestError", message: error.response.data.message };
        }
      }
      throw error;
    }
  };

  const signup = async (email, password, cpassword) => {
    let url = serverString + "api/signup";

    try {
      if (!email) {
        throw { name: "inputError", message: "Email Required" };
      }
      if (!password) {
        throw { name: "inputError", message: "Password Required" };
      }
      if (!cpassword) {
        throw { name: "inputError", message: " Confirm Password Required" };
      }

      if (!cpassword === password) {
        throw {
          name: "inputError",
          message: " Password and Confirm Password doesn't match ",
        };
      }

      await axios.post(url, {
        email,
        password,
        password_confirmation: cpassword,
      });

      await login(email, password);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          throw { name: "requestError", message: error.response.data.message };
        }
      }
      throw error;
    }
  };
  const logout = () => {
    const userObj = {
      name: null,
      email: null,
      avatarInd: null,
      loggedIn: false,
      token: "",
      friends: [],
      requests: { sent: [], received: [] },
    };
    dispatch(populateUser(userObj));
    dispatch(setSelectedFriend(null));
  };

  const refresh = async () => {
    const res = await axios.get(serverString + "api/userDetails", {
      headers: { Authorization: "Bearer " + user.token },
    });

    const userObj = res.data;
    userObj.token = user.token;
    userObj.loggedIn = true;

    dispatch(populateUser(userObj));
  };
  return { user, login, signup, logout, refresh };
};

export default useUser;
