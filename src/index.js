import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes} from "react-router-dom";
import './css/main.min.css';
import Menu from "./components/menu/Menu"
import PagesRoutes from './components/allPages/PagesRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Router>
          <Menu/>
          <PagesRoutes/>
      </Router>
);

