import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    populate: (state, action) => {
      state = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { populate } = userSlice.actions;

export default userSlice.reducer;
