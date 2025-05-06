import React from 'react';
import "./Slider.css"
import About from "../About/About";
import  "../About/About.css"
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Pagination} from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
import useWindowWidth from "../../../utils/useWindowWidth";
import mob from "./SliderMobile.module.css"
 
const Slider = () => {
    const width = useWindowWidth();

    if (width<400){
        return (
            <div className={mob.wrap}>
                About us
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
    }

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