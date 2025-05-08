import React from 'react';
import IntroSection from "../Components/UI/IntroSection/IntroSection";
import Slider from "../Components/UI/Slider/Slider";
import Team from "../Components/UI/Team/Team";
import Review from "../Components/UI/Review/Review";

const MainPage = () => {
    return (
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", width:"100%", alignItems: "center",}}>
            <IntroSection/>
            <Slider/>
            <Team/>
            <Review/>
        </div>
    );
};

export default MainPage;