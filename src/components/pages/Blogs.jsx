import React from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <div className="md:px-[100px] px-[30px] py-6 pt-[100px]">
      <div>
        <h1 className="md:text-3xl text-2xl font-[600] text-center py-6">Blogs</h1>
      </div>
      <div className="flex flex-wrap items-center justify-center">
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
