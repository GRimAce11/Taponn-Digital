import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Swiperimg1 from "../../assets/Hero/Swiper_img1.webp";
import Swiperimg2 from "../../assets/Hero/Swiper_img2.webp";
import "swiper/css";
import { Autoplay, Pagination } from 'swiper/modules';

const Hero = () => {
    return (
        <Swiper id="Home"
            autoplay={{
                delay: 1500,
                disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper h-screen w-full">
            <SwiperSlide><img src={Swiperimg1} alt="" className="h-full w-full object-fill" /></SwiperSlide>
            <SwiperSlide><img src={Swiperimg2} alt="" className="h-full w-full object-fill" /></SwiperSlide>
            <SwiperSlide><img src={Swiperimg1} alt="" className="h-full w-full object-fill" /></SwiperSlide>
            <SwiperSlide><img src={Swiperimg2} alt="" className="h-full w-full object-fill" /></SwiperSlide>
            <SwiperSlide><img src={Swiperimg1} alt="" className="h-full w-full object-fill" /></SwiperSlide>
            <SwiperSlide><img src={Swiperimg2} alt="" className="h-full w-full object-fill" /></SwiperSlide>
            <SwiperSlide><img src={Swiperimg1} alt="" className="h-full w-full object-fill" /></SwiperSlide>
            <SwiperSlide><img src={Swiperimg2} alt="" className="h-full w-full object-fill" /></SwiperSlide>
            <SwiperSlide><img src={Swiperimg1} alt="" className="h-full w-full object-fill" /></SwiperSlide>
        </Swiper>
    )
}

export default Hero