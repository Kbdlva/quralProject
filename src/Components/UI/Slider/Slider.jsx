import React, {useEffect, useState} from 'react';
import "./Slider.css"
import About from "../About/About";
import  "../About/About.css"
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Pagination} from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
import useWindowWidth from "../../../utils/useWindowWidth";
import mob from "./SliderMobile.module.css"
import translations from "../../../utils/translates";
import one from '../../../Assets/about__img.png'
import two from '../../../Assets/Rectangle 2.svg'
import three from '../../../Assets/Rectangle 2 (1).svg'
import four from '../../../Assets/Rectangle 2 (2).svg'

const Slider = () => {
    const width = useWindowWidth();
    const lang = localStorage.getItem("lang") || "en";
    const t = translations[lang] || translations["en"];

    if (width<400){
        return (
            <div className={mob.wrap}>
                {t.about_us}
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
                        <About
                            stock={one}
                            title={t.about_slide_1_title}
                            desc={t.about_slide_1_description}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <About
                            stock={two}
                            title={t.about_slide_2_title}
                            desc={t.about_slide_2_description}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <About
                            stock={three}
                            title={t.about_slide_3_title}
                            desc={t.about_slide_3_description}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <About
                            stock={four}
                            title={t.about_slide_4_title}
                            desc={t.about_slide_4_description}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        );
    }

    return (
        <div className={"about"}>
            <div className={"about__title"}>
                {t.about_us}
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
                spaceBetween={10}
            >
                <SwiperSlide>
                    <About
                        stock={one}
                        title={t.about_slide_1_title}
                        desc={t.about_slide_1_description}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <About
                        stock={two}
                        title={t.about_slide_2_title}
                        desc={t.about_slide_2_description}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <About
                        stock={three}
                        title={t.about_slide_3_title}
                        desc={t.about_slide_3_description}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <About
                        stock={four}
                        title={t.about_slide_4_title}
                        desc={t.about_slide_4_description}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;