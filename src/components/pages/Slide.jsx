import React from "react";
import { Link } from "react-router-dom";

const Slide = (props) => {
  return (
    <div className="w-full h-[400px] rounded-[50px] bg-[#07f988] flex items-center justify-between px-[100px]">
      <div
        id="left"
        className="bg-red-300 h-[200px] w-[300px] rounded-[20px]"
      ></div>
      <div id="right" className="w-[600px]">
        <h1 className="text-5xl">{props.title}</h1>
        <p className="text-xl py-4">{props.desc}</p>
        <Link to={props.download} target="_blank">
          <button className="border-2 border-black px-3 py-1 rounded-[20px] hover:bg-black hover:text-white transition-all">
            Download
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Slide;
