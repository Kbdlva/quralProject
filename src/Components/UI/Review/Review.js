import React from 'react';
import "./Review.css"
import ReviewCard from "../ReviewCard/ReviewCard";
import mob from './ReviewMobile.module.css'
import useWindowWidth from "../../../utils/useWindowWidth";

const Review = () => {
    const width = useWindowWidth();

    if (width<400){
        return (
            <div className={mob.wrap}>
                Reviews
                <div className={mob.list}>
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                </div>
            </div>
        );
    }

    return (
        <div className={"review__wrap"}>
            <div className={"review__title"}>
                Review
            </div>
            <div className='all_reviews'>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            </div>
            
        </div>
    );
};

export default Review;