import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    populateUser: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.friends = action.payload.friends;
      state.loggedIn = action.payload.loggedIn;
      state.name = action.payload.name;
      state.avatarInd = action.payload.avatarInd;
      state.requests = action.payload.requests;
      state.token = action.payload.token;
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
