import React from 'react';
import { Route, Routes, useLocation} from "react-router-dom";
import { routes } from '../../jsons/routes';

const PagesRoutes = () => {
    const location = useLocation();
    return (
            <Routes location={location} key={location.pathname}>
                {routes.map(e => 
                    <Route element={e.element} path={e.path} exact={e.exact}/>)
                }
            </Routes>

    );
};

export default PagesRoutes;