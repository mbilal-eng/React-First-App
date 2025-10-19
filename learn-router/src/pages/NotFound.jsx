import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  //   console.log(navigate);
  return (
    <div className="w-full h-[95vh] bg-red-200 flex flex-col justify-center items-center">
      <h1 className="text-4xl text-green-700 font-bold ">Oops! 404</h1>
      <h1 className="text-4xl text-green-700 font-bold ">Page Not Found!</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
        style={{
          marginTop: "20px",
          padding: "10px",
          backgroundColor: "green",
          color: "white",
          borderRadius: "5px",
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;
