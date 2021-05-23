import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    populateUser: (state, action) => {
      console.log(action.payload);
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.friends = action.payload.friends;
      state.loggedIn = action.payload.loggedIn;
      state.name = action.payload.name;
      state.profilePicLink = action.payload.profilePicLink;
      state.requests = action.payload.requests;
      state.token = action.payload.token;
    },
  },
});

// Action creators are generated for each case reducer function
export const { populateUser } = userSlice.actions;

export default userSlice.reducer;
