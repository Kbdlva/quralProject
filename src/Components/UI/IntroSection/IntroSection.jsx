import React from 'react';
import "./IntroSection.css"
import stock from "./stock.png"
import useWindowWidth from "../../../utils/useWindowWidth";
import mob from "./IntroMobile.module.css"
import translations from "../../../utils/translates";

const IntroSection = () => {
    const width = useWindowWidth();
    const t = translations[localStorage.getItem('lang')];

    if (width<400){
        return (
            <div className={mob.wrap}>
                <div className={mob.upper}>
                    <div className={mob.text}>
                        <p>{t.qural_tagline}</p>
                        {t.qural_description}
                    </div>
                    <button>
                        {t.get_platform}
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
                    {t.qural_tagline}
                </div>
                <div className={"desc"}>
                    {t.qural_description}
                </div>
                <button>{t.get_platform}</button>
            </div>
            <div className={"intro__img"}>
                <img src={stock} alt={"stock"}/>
            </div>
        </div>
    );
};

export default IntroSection; 