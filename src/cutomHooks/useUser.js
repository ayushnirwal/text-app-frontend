import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { populateUser } from "../redux/user/userSlice";
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
      const res = await axios.post(url, { email, password });
      const { token, user } = res.data;

      let tmpRequests = null;

      if (isNill(user.requests)) {
        tmpRequests = {
          sent_requests: [],
          received_requests: [],
        };
      } else if (
        isNill(user.requests.sent_requests) &&
        !isNill(user.requests.received_requests)
      ) {
        tmpRequests = {
          sent_requests: [],
          received_requests: user.requests.received_requests,
        };
      } else if (
        !isNill(user.requests.sent_requests) &&
        isNill(user.requests.received_requests)
      ) {
        tmpRequests = {
          sent_requests: user.requests.sent_requests,
          received_requests: [],
        };
      } else {
        tmpRequests = {
          sent_requests: user.requests.sent_requests,
          received_requests: user.requests.received_requests,
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
      id: null,
      name: null,
      email: null,
      avatarInd: null,
      loggedIn: false,
      token: "",
      friends: [],
      requests: { sent_requests: [], received_requests: [] },
    };
    dispatch(populateUser(userObj));
  };
  return { user, login, signup, logout };
};

export default useUser;
