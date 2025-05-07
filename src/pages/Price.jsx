import React, {useEffect, useState} from 'react';
// import "./Price.css"
import PriceCard from "../Components/UI/PriceCard/PriceCard";
import "../Components/UI//Price.css";
import useWindowWidth from "../utils/useWindowWidth";
import translations from "../utils/translates";
import mob from '../styles/PriceMobile.module.css'


const Price = () => {
    const width = useWindowWidth();
    const [t, setT] = useState({});

    useEffect(() => {
        const lang = translations[localStorage.getItem('lang')];
        setT(lang)
    }, [])

    if (width<400){
        return (
            <div className={mob.wrap}>
                <div className={mob.text}>
                    <p>{t.choose_plan_heading}</p>
                    {t.choose_plan_description}
                </div>
                <div className={mob.list}>
                    <PriceCard
                        title = {t.plan_standard}
                        duration ={t.duration_for_6_months}
                        pay="189 990 ₸ "
                        per=""
                    />
                    <PriceCard
                        title = {t.monthly}
                        duration ={t.available_for_a_year}
                        pay="59 990 ₸ "
                        per={t.per_month}
                    />
                    <PriceCard
                        title = {t.annually}
                        duration = {t.available_for_2_years}
                        pay="349 990 ₸ "
                        per={t.per_year}
                    />
                </div>
            </div>
        );
    }
    return (
        <div className={"price__wrap"}>

            <div className='introP'>
            <p>{t.price_packages}</p>

            <div className={"price__title"}>
                    {t.choose_plan_heading}
            </div>
            <div className='desc'>
                    {t.choose_plan_description}
            </div>
            </div>
        
            <div className='all_prices'>
            <PriceCard
            title = {t.plan_standard}
            duration ={t.duration_for_6_months}
            pay="189 990 ₸ "
            per=""
            />
            <PriceCard
            title = {t.monthly}
            duration ={t.available_for_a_year}
            pay="59 990 ₸ "
            per={t.per_month}
            />
            <PriceCard
            title = {t.annually}
            duration = {t.available_for_2_years}
            pay="349 990 ₸ "
            per={t.per_year}
            />
            
            </div>
            
        </div>
    );
};

export default Price;