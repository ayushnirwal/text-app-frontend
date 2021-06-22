import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUserProfile } from "../redux/user/userSlice";

const useProfile = () => {
  const user = useSelector((state) => state.user);
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

  const dispatch = useDispatch();

  const updateProfile = (avatarInd, name) => {
    dispatch(changeUserProfile(avatarInd, name));
  };
  return { profile, updateProfile };
};

export default useProfile;
