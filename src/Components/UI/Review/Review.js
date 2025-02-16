import React from 'react';
import "./Review.css"
import ReviewCard from "../ReviewCard/ReviewCard";


const Review = () => {
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