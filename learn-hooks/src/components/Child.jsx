import React, { memo } from "react";

const Child = ({ handleClick, }) => {
     
  console.log("Child Rendered");
  return (
    <div>
      <h1>Child</h1>
    
      <button onClick={handleClick}>Child Click</button>
    </div>
  );
}

export default memo(Child);
