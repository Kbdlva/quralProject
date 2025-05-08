import React, {useEffect, useState} from 'react';
import "./IntroSection.css"
import stock from "./stock.png"
import useWindowWidth from "../../../utils/useWindowWidth";
import mob from "./IntroMobile.module.css"
import translations from "../../../utils/translates";

const IntroSection = () => {
    const lang = localStorage.getItem("lang") || "en";
    const t = translations[lang] || translations["en"];
    const width = useWindowWidth();

    if (width<400){
        return (
            <div className={mob.wrap}>
                <div className={mob.upper}>
                    <div className={mob.text}>
                        <p>{t.qural_tagline}</p>
                        {t.qural_description}
                    </div>
                    <button
                        onClick={() => {
                            const phone = '77718447355';
                            const message = encodeURIComponent('Здравствуйте! Я хочу узнать подробнее о вашей платформе.');
                            const url = `https://wa.me/${phone}?text=${message}`;
                            window.open(url, '_blank');
                        }}
                    >
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
                <button
                    onClick={() => {
                        const phone = '77718447355';
                        const message = encodeURIComponent('Здравствуйте! Я хочу узнать подробнее о вашей платформе.');
                        const url = `https://wa.me/${phone}?text=${message}`;
                        window.open(url, '_blank');
                    }}
                >
                    {t.get_platform}
                </button>
            </div>
            <div className={"intro__img"}>
                <img src={stock} alt={"stock"}/>
            </div>
        </div>
    );
};

export default IntroSection; 