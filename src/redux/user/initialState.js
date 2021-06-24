const initialState = {
  id: null,
  name: null,
  email: null,
  avatarInd: null,
  loggedIn: false,
  refresh_token: null,
  auth_token: null,
  friends: [],
  requests: {
    sent_requests: [],
    received_requests: [],
  },
};
export default initialState;
