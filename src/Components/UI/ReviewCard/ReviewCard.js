import React from 'react';
import "./ReviewCard.css"
import quote1 from "../../../Assets/icons/format_quote_1.svg"
import quote2 from "../../../Assets/icons/format_quote_2.svg"
import circle from "../../../Assets/Ellipse 5.png"
import star from "../../../Assets/icons/star.svg"


const ReviewCard = () => {
    return (
        <div className={"review__card"}>
            <div className='title_part'>
                <img src={circle} alt="Author"></img>
                <div className='Author'>
                    <div className='name'>Name Surname</div>
                    <div className='job'>CEO JTS</div>
                </div>
                <div className='rating'>8</div>
            <img src={star} alt="star" className='stars'></img>
            </div>
            <div className='review_text'>
                <img src={quote1} alt="start"className='quot-start'></img>
                <div className='review-desc'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 eiusmod tempor incididunt ut labore et dolore magna 
                 aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </div>
                <img src={quote2} alt="end" className='quot-end'></img>
            </div>

            

            
        </div>
    );
};

export default ReviewCard;