import useUser from "./useUser";

const useFriends = () => {
  const { user } = useUser();
  const { friends, auth_token, requests } = user;
  const { sent_requests, received_requests } = requests;
  //send rq
  const sendRequest = (email) => {
    console.log(process.env.SERVER_URL, email);
  };
  //del rq
  const delRequest = (email) => {
    console.log(email);
  };
  //accecpt rq
  const acceptRequest = (email) => {
    console.log(email);
  };
  //reject rq
  const rejectRequest = (email) => {
    console.log(email);
  };
  //remove friend
  const removeRequest = (email) => {
    console.log(email);
  };

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
