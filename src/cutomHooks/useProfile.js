import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUserProfile } from "../redux/user/userSlice";
import { serverString } from "../utils/config";
import useUser from "./useUser";

const useProfile = () => {
  const { user, logout } = useUser();
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({
    avatarInd: user.avatarInd,
    name: user.name,
  });
  useEffect(() => {
    setProfile({
      avatarInd: user.avatarInd,
      name: user.name,
    });
  }, [user]);

  const updateProfile = async (avatarInd, name) => {
    try {
      await axios.post(
        serverString + "api/profileUpdate",
        { avatarInd, name },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + user.token,
          },
        }
      );
      dispatch(changeUserProfile({ avatarInd, name }));
    } catch (error) {
      throw error;
    }
  };
  return { profile, updateProfile };
};

export default useProfile;
