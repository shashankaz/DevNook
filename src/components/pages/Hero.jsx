import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <div className="md:px-[100px] px-[30px] py-6 pt-[100px]">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="w-full h-[400px] rounded-[50px] bg-red-300 flex items-center justify-center">
            <h4>Slide 1</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[400px] rounded-[50px] bg-red-300 flex items-center justify-center">
            <h4>Slide 2</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[400px] rounded-[50px] bg-red-300 flex items-center justify-center">
            <h4>Slide 3</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[400px] rounded-[50px] bg-red-300 flex items-center justify-center">
            <h4>Slide 4</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[400px] rounded-[50px] bg-red-300 flex items-center justify-center">
            <h4>Slide 5</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[400px] rounded-[50px] bg-red-300 flex items-center justify-center">
            <h4>Slide 6</h4>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
