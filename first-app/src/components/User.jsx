import React from "react";

const User = () => {
    const user = {
        name: "John Doe",
        age: 24,
        email: "johndoe@examle.com"
    }

    const renderUser = () => {
        return (
            <div>
                <h3>Name: {user.name}</h3>
                <h3>Age: {user.age}</h3>
                <h3>Email: {user.email}</h3>
            </div>
        );
    }
  return (
    <div>
      <h1>User Data</h1>
        {renderUser()}
    </div>
  );
};

export default User;
