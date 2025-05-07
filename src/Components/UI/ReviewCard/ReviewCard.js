import React from 'react';
import "./ReviewCard.css"
import quote1 from "../../../Assets/icons/format_quote_1.svg"
import quote2 from "../../../Assets/icons/format_quote_2.svg"
import circle from "../../../Assets/Ellipse 5.png"
import star from "../../../Assets/icons/star.svg"
import useWindowWidth from "../../../utils/useWindowWidth";
import mob from "./ReviewCardMobile.module.css"

const ReviewCard = ({name, work, review}) => {
    const width = useWindowWidth();

    if (width<400){
        return (
            <div className={mob.wrap}>
                <div className={mob.header}>
                    <div className={mob.left}>
                        <img src={circle} alt={"avatar"}/>
                        <div className={mob.author}>
                            {name}
                            <span>
                                {work}
                            </span>
                        </div>
                    </div>
                    <div className={mob.right}>
                        8
                        <img src={star} alt={"star"}/>
                    </div>
                </div>
                <div className={mob.text}>
                    <img src={quote1} alt={"quote"}/>
                    <p>
                        {review}
                    </p>
                    <img src={quote2} alt={"quote"} style={{alignSelf:"flex-end"}}/>
                </div>
            </div>
        );
    }
    return (
        <div className={"review__card"}>
            <div className='title_part'>
                <img src={circle} alt="Author"></img>
                <div className='Author'>
                    <div className='name'>{name}</div>
                    <div className='job'>{work}</div>
                </div>
                <div className='rating'>8</div>
            <img src={star} alt="star" className='stars'></img>
            </div>
            <div className='review_text'>
                <img src={quote1} alt="start"className='quot-start'></img>
                <div className='review-desc'>
                    {review}
                </div>
                <img src={quote2} alt="end" className='quot-end'></img>
            </div>

            

            
        </div>
    );
};

export default ReviewCard;