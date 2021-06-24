import useUser from "./useUser";

const useFriends = () => {
  const { user } = useUser();
  const { friends, auth_token, requests } = user;
  const { sent_requests, received_requests } = requests;
  //send rq
  const sendRequest = (email) => {};
  //del rq
  const delRequest = (email) => {};
  //accecpt rq
  const acceptRequest = (email) => {};
  //reject rq
  const rejectRequest = (email) => {};
  //remove friend
  const removeRequest = (email) => {};

  return {
    friends,
    sent_requests,
    received_requests,
    sendRequest,
    delRequest,
    acceptRequest,
    rejectRequest,
    removeRequest,
  };
};

export default useFriends;
