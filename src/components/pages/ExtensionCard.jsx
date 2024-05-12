import React from "react";
import { Link } from "react-router-dom";

const ExtensionCard = (props) => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-6 my-6 bg-gray-100 hover:bg-gray-200 rounded-[20px]">
      <div className="flex gap-4">
        <div className="min-h-[150px] min-w-[250px] md:block hidden bg-red-300 rounded-[20px]"></div>
        <div className="flex flex-col items-start">
          <h1 className="md:text-2xl text-xl font-[500] pb-2">{props.title}</h1>
          <p className="md:text-base text-sm pb-2">{props.desc}</p>
          <h4 className="md:text-sm text-xs bg-gray-300 px-3 py-1 rounded-[20px] mt-3">
            {props.category}
          </h4>
        </div>
      </div>
      <div className="md:block flex justify-center items-center md:mt-0 mt-6">
        <button className="md:text-xl text-base bg-blue-500 text-white hover:bg-blue-700 px-4 py-1 ml-8 rounded-[20px]">
          <Link to={props.link} target="_blank">
            Download
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ExtensionCard;
