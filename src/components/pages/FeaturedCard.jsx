import React from "react";

const FeaturedCard = () => {
  return (
    <div className="my-4">
      <div className="rounded-[20px] py-6 bg-gray-100 w-[250px] h-[300px] hover:bg-gray-200 hover:cursor-pointer">
        <div className="h-[150px] min-w-[200px] mx-6 bg-red-300 rounded-[20px]"></div>
        <div>
          <h1 className="px-6 mt-3 text-lg font-[500]">Title</h1>
          <p className="px-6 mt-3">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
