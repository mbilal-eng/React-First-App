import React from "react";

const Home = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="w-full h-[95vh] bg-blue-200 flex flex-col justify-center items-center">
      <h1 className="text-4xl text-green-700 font-bold ">Home</h1>
      <button
        onClick={() => {
          setIsLoggedIn(!isLoggedIn);
        }}
        className="p-2 border-2 cursor-pointer"
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Home;
