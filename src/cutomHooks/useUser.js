import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { populateUser } from "../redux/user/userSlice";

const useUser = () => {
  const user = useSelector((state) => state.user);
  const dispath = useDispatch();
  const login = async (email, password) => {
    let url = "http://localhost:5000" + "/api/signin";

    try {
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
      console.log(error);
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
      console.log(error);
    }
  };
  return { user, login, signup };
};

export default useUser;