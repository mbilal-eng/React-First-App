import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state) => {
      // console.log("state from redux slice ", state);
      state.count += 1;
    },
    decreament: (state) => {
      // console.log("state from redux slice ", state);
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    increamentByValue: (state, actions) => {
      state.count += actions.payload;
    },
  },
});

export default counterSlice.reducer;
export const { increament, decreament, reset, increamentByValue } =
  counterSlice.actions;
