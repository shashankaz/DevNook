import React from "react";

const BlogCard = () => {
  return (
    <div className="my-4 p-4 rounded-[20px] bg-gray-100 hover:bg-gray-200 hover:cursor-pointer">
      <div className="md:w-[350px] w-[250px] flex flex-col gap-3">
        <div className="md:h-[250px] h-[150px] bg-red-300 rounded-[20px]"></div>
        <h1 className="md:text-2xl text-xl font-[500]">Title</h1>
        <p className="md:text-base text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          dolores!
        </p>
        <div className="flex justify-between">
          <p className="md:text-sm text-xs font-[300]">11-05-2024</p>
          <p className="md:text-sm text-xs font-[300]">Category</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
