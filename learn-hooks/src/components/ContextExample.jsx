import React, { useContext } from "react";
import UserContext from "../context/userContext";
import CountContext from "../context/countContext";

const ContextExample = () => {
  const { count } = useContext(CountContext);
  console.log("Parent Rendered");
  return (
    <div style={{ background: "red" }}>
      <h1>Context Example</h1>
      <h2>Parent</h2>
      <h2>Count: {count}</h2>
      <ChildComponent />
    </div>
  );
};

export default ContextExample;

const ChildComponent = () => {
    console.log("Child Rendered");
  const { count, setCount } = useContext(CountContext);
  return (
    <div style={{ background: "blue" }}>
      <h1>Child Component</h1>
      <button onClick={() => setCount(count + 1)}>Counter Increament</button>
      <GrandChildComponent />
    </div>
  );
};

const GrandChildComponent = () => {
  const user = useContext(UserContext);
  console.log("grand Child Rendered");
  return (
    <div style={{ background: "green" }}>
      <h1>Grand Child Component</h1>
      <h2>Username: {user.name}</h2>
      <h2>UserEmail: {user.email}</h2>
    </div>
  );
};
