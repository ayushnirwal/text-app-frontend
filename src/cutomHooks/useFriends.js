import { useDispatch, useSelector } from "react-redux";
import { populateUser } from "../redux/user/userSlice";
import axios from "axios";
let url = "http://localhost:5000/api";

const useFriends = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const config = {
    headers: {
      authorization: `Bearer ${user.token}`,
    },
  }

  const sendRequest = async ({ email }) => {
    const res = await axios.post(`${url}/sendRequest`, { email }, config);
    console.log({ res });
    return res;
  };

  const acceptRequest = async ({ email }) => {
    const res = await axios.post(`${url}/acceptRequest`, { email }, config);
    dispatch(populateUser({
      ...user,
      friends: [
        ...user.friends,
        res.data,
      ]
    }));
  };

  const rejectRequest = async ({ email }) => {
    const res = await axios.post(`${url}/rejectRequest`, { email }, config);
    return res;
  };

  const deleteRequest = async ({ email }) => {
    const res = await axios.post(`${url}/delRequest`, { email }, config);
    return res;
  };

  const removeFriend = async ({ email }) => {
    const res = await axios.post(`${url}/removeFriend`, { email }, config);
    return res;
  };

  const getPendingRequests = async () => {
    const res = await axios.get(`${url}/requests`, config);
    dispatch(populateUser({
      ...user,
      requests: res.data,
    }));
  };

  const friends = useSelector((state) => state.user.friends);
  const requests = useSelector((state) => state.user.requests);
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
