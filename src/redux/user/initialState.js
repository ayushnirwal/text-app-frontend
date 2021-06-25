const initialState = {
  id: null,
  name: null,
  email: null,
  avatarInd: null,
  loggedIn: false,
  token: null,
  friends: [],
  requests: {
    sent_requests: [],
    received_requests: [],
  },
};
export default initialState;
