import React from 'react';
import prof from "./profile.jpg"
import useWindowWidth from "../../../utils/useWindowWidth";
import mob from './MemberMobile.module.css'

const MemberCard = () => {
    const width = useWindowWidth();

    if (width<400){
        return (
            <div className={mob.wrap}>
                <div className={mob.avatar}>
                    <img src={prof} alt={"avatar"}/>
                </div>
                <div className={mob.text}>
                    <div className={mob.title}>
                        <p>
                            Name Surname
                        </p>
                        Java developer
                    </div>
                    Current Workplace
                </div>
            </div>
        );
    }
    return (
        <div className={"card"}>
            <div className={"card__img"}>
                <img src={prof} alt={"profile"}/>
            </div>
            <div className={"card__text"}>
                <div className={"card__title"}>
                    <b>Name Surname</b>
                    <br />
                    Java developer
                </div>
                <div className={"card__desc"}>
                    Current Workplace
                </div>
            </div>
        </div>
    );
};

export default MemberCard;