import React from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <div className="md:px-[100px] px-[30px] py-6 pt-[100px]">
      <div>
        <h1 className="md:text-3xl text-2xl font-[600]">Blogs</h1>
      </div>
      <div className="flex flex-wrap gap-4 justify-between">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blogs;
