import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { populateUser } from "../redux/user/userSlice";
import { serverString } from "../utils/config";
import { isNill } from "../utils/helpers";

const useUser = () => {
  const url = `${serverString}/api`;
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const getUserDetails = async () => {
    console.log("GETTING USER DETAILS");
    const config = {
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    };
    const res = await axios.get(`${url}/userDetails`, config);
    dispatch(populateUser({ ...res.data, token: user.token, loggedIn: true }));
  };
  const login = async (email, password) => {
    let url = `${url}/signin`;

    try {
      if (!email) {
        throw { name: "inputError", message: "Email Required" };
      }
      if (!password) {
        throw { name: "inputError", message: "Password Required" };
      }
      console.log("making api call");
      const res = await axios.post(url, { email, password });
      console.log("api call complete, data: ", res);

      const { token, user } = res.data;
      let tmpRequests = null;

      if (isNill(user.requests)) {
        tmpRequests = {
          sent: [],
          received: [],
        };
      } else if (
        isNill(user.requests.sent) &&
        !isNill(user.requests.received)
      ) {
        tmpRequests = {
          sent: [],
          received: user.requests.received,
        };
      } else if (
        !isNill(user.requests.sent) &&
        isNill(user.requests.received)
      ) {
        tmpRequests = {
          sent: user.requests.sent,
          received: [],
        };
      } else {
        tmpRequests = {
          sent: user.requests.sent,
          received: user.requests.received,
        };
      }

      const userObj = {
        id: user.id,
        name: user.name,
        email: user.email,
        avatarInd: user.avatarInd,
        loggedIn: true,
        token: token,
        friends:
          user.friends === undefined || user.friends === null
            ? []
            : user.friends,
        requests: tmpRequests,
      };
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
    let url = serverString + "/api/signup";

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
      id: null,
      name: null,
      email: null,
      avatarInd: null,
      loggedIn: false,
      token: "",
      friends: [],
      requests: { sent: [], received: [] },
    };
    dispatch(populateUser(userObj));
  };
  return { user, login, signup, logout, getUserDetails };
};

export default useUser;
