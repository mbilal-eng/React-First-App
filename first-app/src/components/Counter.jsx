import { useEffect, useState } from "react";
import MyButton from "./myButton";

export default function Counter() {
  //   let count = 0
  const [count, setCount] = useState(0);

  function handleClick() {
    // count = count + 1;
    setCount(count + 1);
    // console.log(count);
  }

  function handleDecrease() {   
    setCount(count - 1);
    // console.log(count);
  }

// run when component mounts and unmounts
  useEffect(() => {
    console.log("Component Mounted");
    
    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  // run when count changes and mount 
  useEffect(() => {
    console.log("Count Updated:", count);

    return () => {
      console.log("Cleanup for count:", count);
    };
  }, [count]);


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "20px",
        background: "lightgrey",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <h2>Count: {count}</h2>
      <MyButton handleClick={handleClick} count={count} />
      <MyButton handleClick={handleDecrease} count={count} />
    </div>
  );
}
