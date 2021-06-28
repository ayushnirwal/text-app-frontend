const initialState = {
  name: null,
  email: null,
  avatarInd: null,
  loggedIn: false,
  token: null,
  friends: [],
  selectedFriend: null,
  requests: {
    sent: [],
    received: [],
  },
};
export default initialState;
