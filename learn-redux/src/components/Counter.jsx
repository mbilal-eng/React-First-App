import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increament,
  decreament,
  reset,
  increamentByValue,
} from "../redux/features/counter/CounterSlice";
import { themeToggle } from "../redux/features/theme/themeSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const theme = useSelector((state) => state.theme.theme);

  const dispatch = useDispatch();
  return (
    <div
      style={{
        padding: "10px",
        borderRadius: 20,
        background: theme == "light" ? "white" : "",
        color: theme == "light" ? "black" : "",
        position: "relative",
      }}
    >
      <button
        onClick={() => {
          dispatch(themeToggle());
        }}
      >
        Toggle Theme:{theme}
      </button>

      <h1>Counter :{count}</h1>
      <button
        onClick={() => {
          dispatch(increament());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decreament());
        }}
      >
        Deccrement
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch(increamentByValue(5));
        }}
      >
        Increament by 5
      </button>
    </div>
  );
};

export default Counter;
