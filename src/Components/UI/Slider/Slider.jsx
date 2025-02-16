import React from 'react';
import about__img from "../About/about__img.png"
import "./Slider.css"
import About from "../About/About";
import  "../About/About.css"
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Pagination} from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';


const Slider = () => {
    return (
        <div className={"about"}>
            <div className={"about__title"}>
                About us
            </div>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                loop={true}
                autoplay={{ delay: 7000, disableOnInteraction: false }}
                speed={3000}
                className="mySwiper"
                spaceBetween={10}>
                <SwiperSlide>
                    <About/>
                </SwiperSlide>
                <SwiperSlide>
                    <About/>
                </SwiperSlide>
                <SwiperSlide>
                    <About/>
                </SwiperSlide>
                <SwiperSlide>
                    <About/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;