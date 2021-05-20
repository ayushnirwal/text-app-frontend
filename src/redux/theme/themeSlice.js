import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    setSelectedTheme: (state, action) => {
      state.selectedTheme = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedTheme } = themeSlice.actions;

export default themeSlice.reducer;
