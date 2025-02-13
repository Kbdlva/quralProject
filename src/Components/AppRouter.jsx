import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import Price from "../pages/Price";
import FAQ from "../pages/FAQ";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={"/main"} element={<MainPage/>}/>
            <Route path={"/price"} element={<Price/>}/>
            <Route path={"/faq"} element={<FAQ/>}/>
            <Route path="*" element={<Navigate to="/main" />} />
        </Routes>
    );
};

export default AppRouter;