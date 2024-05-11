import React from "react";
import Hero from "./Hero";
import FeaturedExtensions from "./FeaturedExtensions";
import FeaturedBlog from "./FeaturedBlog";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedExtensions/>
      <FeaturedBlog/>
    </div>
  );
};

export default Home;
