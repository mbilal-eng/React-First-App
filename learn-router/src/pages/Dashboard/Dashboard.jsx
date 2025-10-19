import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex ">
      {/* left */}
      <div className=" bg-amber-200 h-[95vh] flex flex-1  flex-col">
        <Link
          to={"profile"}
          className="p-2 bg-blue-300 rounded-2xl m-2 text-white"
        >
          Profile
        </Link>
        <Link
          to={"setting"}
          className="p-2 bg-blue-300 rounded-2xl m-2 text-white"
        >
          Setting
        </Link>
      </div>
      {/* right */}
      <div className="bg-gray-300 h-[95vh] flex-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
