import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

// Assets
// Global styles (Reset CSS, Fonts, Root Variables, etc.)
import './assets/scss/main.scss';

// Create root
const conteiner = document.getElementById('root');
const root = createRoot(conteiner);

// Routes
import HomeRoutes from './pages/home/Routes';

root.render(
   <React.StrictMode>
      <Router>
         <Routes>{HomeRoutes()}</Routes>
      </Router>
   </React.StrictMode>
);
