import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    populateUser: (state, action) => {
      const {
        id,
        email,
        friends,
        loggedIn,
        name,
        profilePicLink,
        requests,
        token,
      } = action.payload;
      Object.assign(state, {
        id,
        email,
        friends,
        loggedIn,
        name,
        profilePicLink,
        requests,
        token,
      });
    },
    changeUserProfile: (state, action) => {
      state.name = action.payload.name;
      state.avatarInd = action.payload.avatarInd;
    },
  },
});

// Action creators are generated for each case reducer function
export const { populateUser, changeUserProfile } = userSlice.actions;

export default userSlice.reducer;
