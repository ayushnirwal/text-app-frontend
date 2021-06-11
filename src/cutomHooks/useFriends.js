import useUser from "./useUser";

import { useDispatch } from "react-redux";
import { populateUser } from "../redux/user/userSlice";
import axios from "axios";
import { serverString } from "../utils/config";
let url = `${serverString}/api`;

const useFriends = () => {
  const dispatch = useDispatch();
  const { user, getUserDetails } = useUser();
  const config = {
    headers: {
      authorization: `Bearer ${user.token}`,
    },
  };

  const sendRequest = async (email) => {
    const res = await axios.post(`${url}/sendRequest`, { email }, config);
    getUserDetails();
    return res;
  };

  const acceptRequest = async (email) => {
    const res = await axios.post(`${url}/acceptRequest`, { email }, config);
    dispatch(
      populateUser({
        ...user,
        friends: [...user.friends, res.data],
      })
    );
    getUserDetails();
  };

  const rejectRequest = async (email) => {
    const res = await axios.post(`${url}/rejectRequest`, { email }, config);
    getUserDetails();
    return res;
  };

  const deleteRequest = async (email) => {
    const res = await axios.post(`${url}/delRequest`, { email }, config);
    getUserDetails();
    return res;
  };

  const removeFriend = async (email) => {
    console.log("removing friend");
    const res = await axios.post(`${url}/removeFriend`, { email }, config);
    getUserDetails();
    return res;
  };

  const getPendingRequests = async () => {
    const res = await axios.get(`${url}/requests`, config);
    dispatch(
      populateUser({
        ...user,
        requests: res.data,
      })
    );
  };

  const friends = user.friends;
  const requests = user.requests;
  return {
    friends,
    requests,
    sendRequest,
    acceptRequest,
    getPendingRequests,
    rejectRequest,
    deleteRequest,
    removeFriend,
  };
};

export default useFriends;
