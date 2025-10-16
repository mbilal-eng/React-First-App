import React, { useCallback, useState } from "react";
import Child from "./Child";

const CallbackExample = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const handleClick = useCallback(() => {
    console.log("Child Clicked");
    setCount((prevCount) => prevCount + 1);
  }, []);

  const handleClickWithoutUseCallback = () => {
    console.log("Child Clicked");
  };

  return (
    <div>
      <h1>CallbackExample</h1>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <button
        onClick={() => {
          console.log("Theme toggled");
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Toggle Theme
      </button>
      <Child handleClick={handleClick}/>
      {/* <Child handleClick={handleClickWithoutUseCallback} count={count} setCount={setCount}/> */}
    </div>
  );
};

export default CallbackExample;
