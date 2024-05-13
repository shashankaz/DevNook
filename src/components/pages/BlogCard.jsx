import React from "react";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  const TruncateTitle = ({ text, wordCount }) => {
    const words = text.split(" ");

    if (words.length > wordCount) {
      const truncatedText = words.slice(0, wordCount).join(" ") + "...";
      return (
        <h1 className="md:text-2xl text-xl font-[500]">{truncatedText}</h1>
      );
    }

    return <h1 className="md:text-2xl text-xl font-[500]">{text}</h1>;
  };

  const TruncateDesc = ({ text, wordCount }) => {
    const words = text.split(" ");

    if (words.length > wordCount) {
      const truncatedText = words.slice(0, wordCount).join(" ") + "...";
      return <p className="md:text-base text-sm">{truncatedText}</p>;
    }

    return <p className="md:text-base text-sm">{text}</p>;
  };

  return (
    <Link to={`/blog/${props.slug}`}>
      <div className="m-3 p-4 rounded-[20px] bg-gray-100 hover:bg-gray-200 hover:cursor-pointer">
        <div className="md:w-[350px] w-[250px] flex flex-col gap-3">
          <div className="md:h-[250px] h-[150px] bg-red-300 rounded-[20px]"></div>
          <TruncateTitle text={props.title} wordCount={5} />
          <TruncateDesc text={props.desc} wordCount={9} />
          <div className="flex justify-between">
            <p className="md:text-sm text-xs font-[300]">{props.date}</p>
            <p className="md:text-sm text-xs font-[300]">{props.category}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
