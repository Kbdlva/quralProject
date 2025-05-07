import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {routes} from "../routes/routes";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route =>
                <Route
                    path={route.path}
                    element={React.cloneElement(route.component)}
                    key={route.path}
                />
            )}
            <Route path="*" element={<Navigate to="/main" />} />
        </Routes>
    );
};

export default AppRouter;