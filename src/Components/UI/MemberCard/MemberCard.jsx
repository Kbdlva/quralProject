import React from 'react';
import prof from "./Avatar profile photo.svg"
import useWindowWidth from "../../../utils/useWindowWidth";
import mob from './MemberMobile.module.css'

const MemberCard = ({name, role, work}) => {
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
                            {name}
                        </p>
                        {role}
                    </div>
                    {work}
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
                    <b>{name}</b>
                    <br />
                    {role}
                </div>
                <div className={"card__desc"}>
                    {work}
                </div>
            </div>
        </div>
    );
};

export default MemberCard;