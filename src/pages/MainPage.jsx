import React from 'react';
import IntroSection from "../Components/UI/IntroSection/IntroSection";
import Slider from "../Components/UI/Slider/Slider";
import Team from "../Components/UI/Team/Team";


const MainPage = () => {
    return (
        <div>
            <IntroSection/>
            <Slider/>
            <Team/>
        </div>
    );
};

export default MainPage;