import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { Storage } from './GlobalContext';

// Assets
// Global styles (Reset CSS, Fonts, Root Variables, etc.)
import './assets/scss/main.scss';

// Create root
const conteiner = document.getElementById('root');
const root = createRoot(conteiner);
const isProduction = process.env.NODE_ENV === 'production';

// Routes
import HomeRoutes from '#pages/home/Routes';

const App = () => (
   <Storage>
      <Router>
         <Routes>{HomeRoutes()}</Routes>
      </Router>
   </Storage>
);

if (isProduction) {
   disableReactDevTools();
   console.log('🖥 Running in Production Environment');
} else console.log('🔬 Running in Development Environment');

root.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
