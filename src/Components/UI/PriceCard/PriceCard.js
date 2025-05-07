import React from 'react';
import "./PriceCard.css"
import support from "../../../Assets/icons/shield.svg"
import call from "../../../Assets/icons/ring_volume.svg"
import personal from "../../../Assets/icons/emoji_emotions.svg"
import translations from "../../../utils/translates";


const PriceCard =  ({title, duration, pay, per}) => {
    const t = translations[localStorage.getItem('lang')];

    return (
        <div className={"price_card"}>
            <div className='title_part_price'>
                <div className='Title'>{title}</div>
                <div className='duration'>{duration}</div>
            </div>
            <div className='Price'>
                <div className='price_word'>{t.price}</div>
                <div className="how_much">
                    {pay}
                    <span className="per">{per}</span>
                    </div>
            </div>
            <div className='benefits'>
                <div className='ben'>
                    <img src={support} className='icon'>
                    </img>
                    <div className="benefit_name">
                        {t.technical_support}
                    </div>
                </div>
                <div className='ben'>
                    <img src={call} className='icon' alt={""}>
                    </img>
                    <div className="benefit_name">
                        {t.always_in_touch}
                    </div>
                </div>
                <div className='ben'>
                    <img src={personal} className='icon' alt={""}>
                    </img>
                    <div className="benefit_name">
                        {t.personalized_onboarding}
                    </div>
                </div>

            </div>
            <button>
                {t.choose}
            </button>
        </div>
    );
};

export default PriceCard;