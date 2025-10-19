import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeToggle: (state) => {
      let isLightMode = state.theme == "light" ? "dark" : "light";
      state.theme = isLightMode;
    },
  },
});

export default themeSlice.reducer;
export const { themeToggle } = themeSlice.actions;
