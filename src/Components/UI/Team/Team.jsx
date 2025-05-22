import React, {useEffect, useState} from 'react';
import "./Team.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import MemberCard from "../MemberCard/MemberCard";
import useWindowWidth from "../../../utils/useWindowWidth";
import mob from './TeamMobile.module.css';
import translations from "../../../utils/translates";

const Team = () => {
    const lang = localStorage.getItem("lang") || "en";
    const t = translations[lang] || translations["en"];
    const width = useWindowWidth();

    if (width<400){
        return (
            <div className={mob.wrap}>
                {t.team}
                <div className={mob.list}>
                    <MemberCard
                        name={"Aidana Yensetaikyzy"}
                        role={"CEO"}
                        work={"TOO “Prime Source”"}
                    />
                    <MemberCard
                        name={"Alina Kabdualiyeva"}
                        role={"System Analyst"}
                        work={"Halyk Market"}
                    />
                    <MemberCard
                        name={"Nurbol Yermagambetov"}
                        role={"Java developer"}
                        work={"TOO “Prime Source”"}
                    />
                    <MemberCard
                        name={"Madiyar Kuralov"}
                        role={"React Developer"}
                        work={"SDU University"}
                    />
                    <MemberCard
                        name={"Iliyas Bekkhozha"}
                        role={"DevOps"}
                        work={"SDU University"}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className={"team__wrap"}>
            <div className={"team__title"}>
                {t.team}
            </div>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                spaceBetween={5}
                slidesPerView={4}
                slidesOffsetBefore={100}
                className='team'>
                <SwiperSlide>
                    <MemberCard
                        name={"Aidana Yensetaikyzy"}
                        role={"CEO"}
                        work={"TOO “Prime Source”"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MemberCard
                        name={"Alina Kabdualiyeva"}
                        role={"System Analyst"}
                        work={"Halyk Market"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MemberCard
                        name={"Nurbol Yermagambetov"}
                        role={"Java developer"}
                        work={"TOO “Prime Source”"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MemberCard
                        name={"Madiyar Kuralov"}
                        role={"Frontend Developer"}
                        work={"SDU University"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MemberCard
                        name={"Iliyas Bekkhozha"}
                        role={"Backend Developer"}
                        work={"SDU University"}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Team;