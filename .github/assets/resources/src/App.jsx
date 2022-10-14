import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

// Assets
// Global styles (Reset CSS, Fonts, Root Variables, etc.)
import './assets/scss/main.scss';

// Routes
import HomeRoutes from '#pages/home/Routes';

// Create root
const conteiner = document.getElementById('root');
const root = createRoot(conteiner);
const isProduction = process.env.NODE_ENV === 'production';

if (isProduction) disableReactDevTools();

root.render(
   <React.StrictMode>
      <Router>
         <Routes>{HomeRoutes()}</Routes>
      </Router>
   </React.StrictMode>
);
