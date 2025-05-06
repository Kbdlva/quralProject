import React from 'react';
import "./IntroSection.css"
import stock from "./stock.png"
import useWindowWidth from "../../../utils/useWindowWidth";
import mob from "./IntroMobile.module.css"

const IntroSection = () => {
    const width = useWindowWidth();

    if (width<400){
        return (
            <div className={mob.wrap}>
                <div className={mob.upper}>
                    <div className={mob.text}>
                        <p>QURAL – Platform for Effective Learning Management  </p>
                        QURAL – Platform for Effective Learning Management  QURAL – Platform for Effective Learning Management
                    </div>
                    <button>
                        Get platform
                    </button>
                </div>
                <div className={mob.stock}>
                    <img src={stock} alt={"stock"}/>
                </div>
            </div>
        );
    }

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
                <img src={stock} alt={"stock"}/>
            </div>
        </div>
    );
};

export default IntroSection; 