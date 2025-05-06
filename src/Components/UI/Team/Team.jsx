import React from 'react';
import "./Team.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import MemberCard from "../MemberCard/MemberCard";
import useWindowWidth from "../../../utils/useWindowWidth";
import mob from './TeamMobile.module.css'

const Team = () => {
    const width = useWindowWidth();

    if (width<400){
        return (
            <div className={mob.wrap}>
                Team
                <div className={mob.list}>
                    <MemberCard/>
                    <MemberCard/>
                    <MemberCard/>
                    <MemberCard/>
                </div>
            </div>
        );
    }

    return (
        <div className={"team__wrap"}>
            <div className={"team__title"}>
                Team
            </div>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                spaceBetween={5}
                slidesPerView={4}
                slidesOffsetBefore={100}
                className='team'>
                <SwiperSlide>
                    <MemberCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <MemberCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <MemberCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <MemberCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <MemberCard/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Team;