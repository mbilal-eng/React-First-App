import React, { useState, useRef, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(0);

  let counterVariable = 0;

  const incrementCounterVariable = () => {
    counterVariable += 1;
    console.log("Counter variable:", counterVariable);
  };

  const incrementCounterRef = () => {
    counterRef.current = counterRef.current + 1;
    console.log("Counter ref:", counterRef.current);
  };

  useEffect(() => {
    //   counterRef.current = counterRef.current + 1;
    console.log("Counter rendered:", counterRef.current, "times");
  }, [counterRef]);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <p>Counter Variable: {counterVariable}</p>
      <p>Counter Ref: {counterRef.current}</p>
      <button onClick={incrementCounterVariable}>
        {" "}
        Increment Counter Variable {counterVariable}
      </button>
      <button onClick={incrementCounterRef}>
        {" "}
        Increment Counter Ref {counterRef.current}
      </button>
    </div>
  );
};

export default Counter;
