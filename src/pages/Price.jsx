import React from 'react';
// import "./Price.css"
import PriceCard from "../Components/UI/PriceCard/PriceCard";
import "../Components/UI//Price.css";



const Price = () => {
    return (
        <div className={"price__wrap"}>
            <div className={"review__title"}>
                Affordable Learning, Unlimited Potential
            </div>
            <div className='desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className='all_prices'>
            <PriceCard
            title = "Standard"
            duration = "for 6 months"
            pay="189 990 ₸ "
            per=""
            />
            <PriceCard
            title = "Monthly"
            duration = "favailable for a year"
            pay="59 990 ₸ "
            per="per month"
            />
            <PriceCard
            title = "Annually"
            duration = "available for 2 years"
            pay="349 990 ₸ "
            per="per year"
            />
            
            </div>
            
        </div>
    );
};

export default Price;