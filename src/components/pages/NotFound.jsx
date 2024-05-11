import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="md:px-[100px] px-[30px] py-6 pt-[100px] flex flex-col items-center justify-center h-[80vh]">
      <h1 className="text-3xl font-[600] uppercase">404 - Page not found</h1>
      <p className="text-xl w-[600px] text-center my-8">
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </p>
      <Link to={"/"}>
        <button className="text-xl bg-blue-500 text-white hover:bg-blue-700 px-6 py-2 ml-8 rounded-[30px]">
          Go to homepage
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
