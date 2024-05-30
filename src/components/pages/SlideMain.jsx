import React from "react";
import { Link } from "react-router-dom";

const SlideMain = () => {
  return (
    <div className="w-full h-[400px] rounded-[50px] bg-[#07f988] flex flex-col items-center justify-center px-[100px]">
      <h1 className="text-4xl">Welcome to the DevNook</h1>
      <p className="text-lg py-6">
        Supercharge your browser with curated extensions and many more
      </p>
      <Link to={"/extensions"}>
        <button className="border-2 border-black px-3 py-1 rounded-[20px] hover:bg-black hover:text-white transition-all">
          See collection
        </button>
      </Link>
    </div>
  );
};

export default SlideMain;
