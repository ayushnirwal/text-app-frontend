import { serverString } from "../utils/config";
import useFetchSWR from "./useFetchSWR";
import useUser from "./useUser";

const useFriends = () => {
  const { user } = useUser();

  const { friends } = user;

  const { sent, received } = user.requests;
  //send rq
  const sendRequest = (email) => {};
  //accept rq
  const acceptRequest = (email) => {};
  //reject rq
  const rejectRequest = (email) => {};
  //remove friend
  const removeRequest = (email) => {};

  return {
    friends,
    sent,
    received,
    sendRequest,
    acceptRequest,
    rejectRequest,
    removeRequest,
  };
};

export default useFriends;
