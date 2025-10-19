import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/CounterSlice";
import themeToggle from "./features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeToggle,
  },
});
