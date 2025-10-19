# React Learning Journey

## Topics Cover:

- What is Component
- JSX
- Props
- Conditional Rendering
- List Rendering
- State/useState hook
- lifting state up
- useEffect Hook - which contain the react component lifecycle
- initialization -> Mounting -> updation -> Unmounting
- useRef
- useMemo
- useCallback
- ContextApi [createContext, useContext, Provider]
- react-router-dom
- redux and redux toolkit

## useRef

- `useRef` is a hook which is used to persist its value on every rerender.
- used for directly changes in DOM.

```text
useRef apni value ko change nhi hone deta hr re-rendering me.
iski example hm ne dekhi Counter app jhaa hm ne ek simple variable liya aur ek ref variable liya.
simple variable ki value reset ho gayi jese hi component re-render hua.
but jb ref valu ko update phr component ko re-render kraa tu us ki value persistent/save rhi
```

## useMemo

- `useMemo` is an hook which cached the value of high calculation and only run when its dependency is change otherwise it cache it value and pass it.

```text
Example me hm ne dekha k hamare pass ek component me 2 states he, [theme,number]. the number is dependent on heavy calculation
aaur mere pass ek heavyCalculation perform kr rhaa hu jo 2 min ka time consume kr rhi he which is very huge, aur jb me theme change kr rhaa hu jb bhi wo heavy calculation kr rhaa he jo re-rendering me time laga rhaa he.
tu heavyCalculation ko hm ne memoized kr diya taa k jb us ki dependency call hu usi waqt wo function call hu wrna nhi hu.
```

## useCallback

- `useCallback` memoizes a function, so it’s not recreated on every render unless dependencies change.

```text
hm ne useCallBack me dekha k ye function ko persistent rkhta he taa k is k related child re-render nhi hu jhaa ye props k through k call ho rhaa he.

hm ne example k dekha k jb hm ne Parent se ek function child ko pass kraa aur parent ki state change hone pr Child re-render ho gyaa,

lkn jb hm ne handleClick ko callback me rkha aur us k child Component ko memo(Child) kraa tu prh function ne Parent state change ho ne pr child ko re render nhi kiya.

ye us waqt kaam aaskta he jb child data static hu aur whaa update ki need na hu.
like stateless Widget is Flutter
```

## ContextAPI

- `createContext`
- Provide using `context.Provider`
- Consume usnig `useContext`

## Redux-toolkit

- first `configureStore`.

```jsx
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/CounterSlice";
import themeToggle from "./features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeToggle,
  },
});
```

- Create FeatureSlices `createSlice`
- and make actions

```jsx
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
```

- pass the router to parent component

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
```

- add this to reducer
- dispatch
- call it on UI.

```jsx
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
```
