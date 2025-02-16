import React from 'react';
import prof from "./profile.jpg"

const MemberCard = () => {
    return (
        <div className={"card"}>
            <div className={"card__img"}>
                <img src={prof} alt={"profile"}/>
            </div>
            <div className={"card__text"}>
                <div className={"card__title"}>
                    <b>Name Surname</b>
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