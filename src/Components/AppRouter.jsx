import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {AuthContext} from "../context";
import {privateRoutes, publicRoutes} from "../routes/routes";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    return (
        isAuth
            ?<Routes>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.component}
                        key={route.path}
                    />
                )}
                <Route path="*" element={<Navigate to="/main" />} />
            </Routes>
            :<Routes>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.component}
                        key={route.path}
                    />
                )}
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
    );
};

export default AppRouter;