import React from 'react';
import "./IntroSection.css"
import stock from "./stock.png"

const IntroSection = () => {
    return (
        <div className={"intro__section"}>
            <div className={"intro_text"}>
                <div className={"title"}>
                    QURAL – Platform for Effective Learning Management
                </div>
                <div className={"desc"}>
                    QURAL – Platform for Effective Learning Management QURAL – Platform for Effective Learning Management
                </div>
                <button>Get platform</button>
            </div>
            <div className={"intro__img"}>
                <img src={stock}/>
            </div>
        </div>
    );
};

export default IntroSection;