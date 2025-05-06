import React from 'react';
import about__img from "./about__img.png";
import "./About.css"
import useWindowWidth from "../../../utils/useWindowWidth";
import mob from './AboutMobile.module.css'

const About = () => {
    const width = useWindowWidth();

    if (width<400){
        return (
            <div className={mob.wrap}>
                <div className={mob.stock}>
                    <img src={about__img} alt={"about"}/>
                </div>
                <div className={mob.text}>
                    <p>Advantage 1 Advantage 1</p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                    Advantage 1
                </div>
                <div className={"text_desc"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
        </div>
    );
};

export default About;