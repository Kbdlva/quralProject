import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={"/main"} element={<MainPage/>}/>
            <Route path="*" element={<Navigate to="/main" />} />
        </Routes>
    );
};

export default AppRouter;