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
        <div>
            <Swiper
                pagination={true}
                modules={[Pagination, Autoplay]}
                loop={true}
                autoplay={{ delay: 7000, disableOnInteraction: false }}
                speed={3000}
                className="mySwiper">
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