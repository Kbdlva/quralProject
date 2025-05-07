import React from 'react';
import about__img from "../../../Assets/about__img.png";
import "./About.css"
import useWindowWidth from "../../../utils/useWindowWidth";
import mob from './AboutMobile.module.css'

const About = ({title, desc, stock}) => {
    const width = useWindowWidth();

    if (width<400){
        return (
            <div className={mob.wrap}>
                <div className={mob.stock}>
                    <img src={stock} alt={"about"}/>
                </div>
                <div className={mob.text}>
                    <p>{title}</p>
                    {desc}
                </div>
            </div>
        );
    }

    return (
        <div className={"about__body"}>
            <div className={"about__img"}>
                <img src={about__img} alt={"about-1"}/>
            </div>
            <div className={"about__text"}>
                <div className={"text_title"}>
                    {title}
                </div>
                <div className={"text_desc"}>
                    {desc}
                </div>
            </div>
        </div>
    );
};

export default About;