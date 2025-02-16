import React from 'react';
import "./PriceCard.css"
import support from "../../../Assets/icons/shield.svg"
import call from "../../../Assets/icons/ring_volume.svg"
import personal from "../../../Assets/icons/emoji_emotions.svg"


const PriceCard =  ({
    title,
    duration,
    pay,
    per
  }) => {
    return (
        <div className={"price_card"}>
            <div className='title_part_price'>
                <div className='Title'>{title}</div>
                <div className='duration'>{duration}</div>
            </div>
            <div className='Price'>
                <div className='price_word'>Price</div>
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
                        Technical support   
                    </div>
                </div>
                <div className='ben'>
                    <img src={call} className='icon'>
                    </img>
                    <div className="benefit_name">
                        Always in touch  
                    </div>
                </div>
                <div className='ben'>
                    <img src={personal} className='icon'>
                    </img>
                    <div className="benefit_name">
                        Personalized onboarding   
                    </div>
                </div>

            </div>
            <button>
                Buy
            </button>
        </div>
    );
};

export default PriceCard;