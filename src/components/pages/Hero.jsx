import React, { useRef, useState } from "react";
import SlideMain from "./SlideMain";
import Slide from "./Slide";
import extensions from "../../data/extensions.json";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <div className="md:px-[100px] px-[30px] py-6 pt-[100px]">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <SlideMain />
        </SwiperSlide>
        {extensions.map((extension) => (
          <SwiperSlide>
            <Slide
              title={extension.name}
              desc={extension.description}
              download={extension.download_link}
              bgColor={extension.background_color}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
