import { isRejected } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { populateUser } from "../redux/user/userSlice";

const useUser = () => {
  const user = useSelector((state) => state.user);
  const dispath = useDispatch();
  const login = async (email, password) => {
    let url = "http://localhost:5000" + "/api/signin";

    try {
      if (!email) {
        throw { name: "inputError", message: "Email Required" };
      }
      if (!password) {
        throw { name: "inputError", message: "Password Required" };
      }
      const res = await axios.post(url, { email, password });
      const { token, user } = res.data;

      const userObj = {
        id: user.id,
        name: user.name,
        email: user.email,
        profilePicLink: user.profilePicLink,
        loggedIn: true,
        token: token,
        friends:
          user.friends === undefined || user.friends === null
            ? []
            : user.friends,
        requests:
          user.requests === undefined || user.requests === null
            ? []
            : user.requests,
      };
      dispath(populateUser(userObj));
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          throw { name: "requestError", message: error.response.data.message };
        }
      }
      throw error;
    }
  };

  const signup = async (name, email, password, cpassword) => {
    let url = "http://localhost:5000" + "/api/signup";

    try {
      await axios.post(url, {
        name,
        email,
        password,
        password_confirmation: cpassword,
      });

      login(email, password);
    } catch (error) {
      throw new Error(error);
    }
  };
  const logout = () => {
    const userObj = {
      id: null,
      name: null,
      email: null,
      profilePicLink: "",
      loggedIn: false,
      token: "",
      friends: [],
      requests: [],
    };
    dispath(populateUser(userObj));
  };
  return { user, login, signup, logout };
};

export default useUser;
