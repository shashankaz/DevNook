import React from "react";
import { Link } from "react-router-dom";
import FeaturedCard from "./FeaturedCard";

const FeaturedExtensions = () => {
  return (
    <div className="md:px-[100px] px-[30px] py-6">
      <div className="flex justify-between">
        <div>
          <h1 className="md:text-2xl text-xl font-[600]">Editor's Choice</h1>
          <p className="text-sm">
            Discover top extensions for a better browsing experience.
          </p>
        </div>
        <div className="text-base">
          <Link to={"/extensions"}>
            <button className="hover:bg-gray-300 px-3 py-1 rounded-[20px] md:text-base hidden md:block">
              See more
            </button>
          </Link>
        </div>
      </div>
      <div className="py-2 max-h-[350px] gap-4 flex flex-wrap overflow-hidden justify-between">
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </div>
    </div>
  );
};

export default FeaturedExtensions;
