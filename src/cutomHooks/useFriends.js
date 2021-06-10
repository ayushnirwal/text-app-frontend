import { useSelector } from "react-redux";

const useFriends = () => {
  //tbd add functionality

  //send rq
  //del rq
  //accecpt rq
  //reject rq
  //remove friend

  const friends = useSelector((state) => state.user.friends);
  return { friends };
};

export default useFriends;
