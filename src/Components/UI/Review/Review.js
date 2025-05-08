import React, {useEffect, useState} from 'react';
import "./Review.css"
import ReviewCard from "../ReviewCard/ReviewCard";
import mob from './ReviewMobile.module.css'
import useWindowWidth from "../../../utils/useWindowWidth";
import translations from "../../../utils/translates";

const Review = () => {
    const lang = localStorage.getItem("lang") || "en";
    const t = translations[lang] || translations["en"];
    const width = useWindowWidth();

    if (width<400){
        return (
            <div className={mob.wrap}>
                {t.reviews}
                <div className={mob.list}>
                    <ReviewCard
                        name={"Teacher"}
                        work={"Tesla Educational center"}
                        review={"In general, everything is clear and convenient"}
                    />
                    <ReviewCard
                        name={"Teacher"}
                        work={"Tesla Educational center"}
                        review={"overall intuitive interface"}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className={"review__wrap"}>
            <div className={"review__title"}>
                {t.reviews}
            </div>
            <div className='all_reviews'>
                <ReviewCard
                    name={"Teacher"}
                    work={"Tesla Educational center"}
                    review={"In general, everything is clear and convenient"}
                />
                <ReviewCard
                    name={"Teacher"}
                    work={"Tesla Educational center"}
                    review={"overall intuitive interface"}
                />
            </div>
            
        </div>
    );
};

export default Review;