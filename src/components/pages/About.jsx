import React from "react";

const About = () => {
  return (
    <div className="md:px-[100px] px-[30px] py-6 pt-[100px]">
      <div>
        <h1 className="md:text-3xl text-2xl font-[600] text-center py-6">
          About Us
        </h1>
      </div>
      <div className="flex flex-col gap-3 md:text-xl text-lg my-6">
        <p>Welcome to DevNook!</p>
        <p>
          At DevNook, we are passionate about empowering users with innovative
          tools and resources to enhance their online experience. Whether you're
          looking for productivity-boosting extensions, insightful blog posts on
          technology trends, or helpful tutorials to improve your skills, we've
          got you covered.
        </p>
        <p>
          Have questions, suggestions, or feedback? We'd love to hear from you!
          Contact us at <a href="mailto:info@devnook.com">info@devnook.com </a>
          or join our community forums to connect with us and fellow users.
        </p>
        <p>
          Thank you for choosing DevNook. We look forward to serving you and
          being a part of your online journey!
        </p>
      </div>
    </div>
  );
};

export default About;
