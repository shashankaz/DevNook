import React from "react";
import BlogCard from "./BlogCard";
import blog from "../../data/blog.json";

const Blogs = () => {
  return (
    <div className="md:px-[100px] px-[30px] py-6 pt-[100px]">
      <div>
        <h1 className="md:text-3xl text-2xl font-[600] text-center py-6">
          Blogs
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {blog.map((item) => {
          return (
            <BlogCard
              key={item.id}
              title={item.title}
              desc={item.description}
              link={item.link}
              date={item.date}
              category={item.category}
              slug={item.slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
