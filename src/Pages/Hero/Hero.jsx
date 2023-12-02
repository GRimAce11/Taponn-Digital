import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Swiperimg1 from "../../assets/Hero/Swiper_img1.webp";
import Swiperimg1_MBL from "../../assets/Hero/Swiper_img1_mbl.webp";
import Swiperimg2 from "../../assets/Hero/Swiper_img2.webp";
import "swiper/css";
import { Autoplay, Pagination } from 'swiper/modules';

const Hero = () => {
    return (
        <>
        {/* LG Screen Swiper */}
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
                className="mySwiper hidden lg:block h-screen w-full">
                <SwiperSlide >
                    <img src={Swiperimg1} alt="" className="h-full w-full object-cover" /></SwiperSlide>
                <SwiperSlide><img src={Swiperimg2} alt="" className="h-full w-full object-cover" /></SwiperSlide>
                <SwiperSlide><img src={Swiperimg1} alt="" className="h-full w-full object-cover" /></SwiperSlide>
                <SwiperSlide><img src={Swiperimg2} alt="" className="h-full w-full object-cover" /></SwiperSlide>
                <SwiperSlide><img src={Swiperimg1} alt="" className="h-full w-full object-cover" /></SwiperSlide>
                <SwiperSlide><img src={Swiperimg2} alt="" className="h-full w-full object-cover" /></SwiperSlide>
                <SwiperSlide><img src={Swiperimg1} alt="" className="h-full w-full object-cover" /></SwiperSlide>
                <SwiperSlide><img src={Swiperimg2} alt="" className="h-full w-full object-cover" /></SwiperSlide>
                <SwiperSlide><img src={Swiperimg1} alt="" className="h-full w-full object-cover" /></SwiperSlide>
            </Swiper>
            {/* Mobile Screen Swiper */}
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
                className="mySwiper block lg:hidden pt-10 h-screen w-full">
                <SwiperSlide >
                    <img src={Swiperimg1_MBL} alt="" className="h-full w-full object-cover" /></SwiperSlide>
                <SwiperSlide><img src={Swiperimg1_MBL} alt="" className="h-full w-full object-cover" /></SwiperSlide>
                <SwiperSlide><img src={Swiperimg1_MBL} alt="" className="h-full w-full object-cover" /></SwiperSlide>
                <SwiperSlide><img src={Swiperimg1_MBL} alt="" className="h-full w-full object-cover" /></SwiperSlide>
                <SwiperSlide><img src={Swiperimg1_MBL} alt="" className="h-full w-full object-cover" /></SwiperSlide>
                <SwiperSlide><img src={Swiperimg1_MBL} alt="" className="h-full w-full object-cover" /></SwiperSlide>
                <SwiperSlide><img src={Swiperimg1_MBL} alt="" className="h-full w-full object-cover" /></SwiperSlide>
                <SwiperSlide><img src={Swiperimg1_MBL} alt="" className="h-full w-full object-cover" /></SwiperSlide>
                <SwiperSlide><img src={Swiperimg1_MBL} alt="" className="h-full w-full object-cover" /></SwiperSlide>
            </Swiper>
        </>
    )
}

export default Hero