import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

// Assets
// Global styles (Reset CSS, Fonts, Root Variables, etc.)
import './assets/scss/main.scss';

const isProduction = process.env.NODE_ENV === 'production';

// Create root
const conteiner = document.getElementById('root');
const root = createRoot(conteiner);

// Routes
import HomeRoutes from 'pages/home/Routes';
import DashboardRoutes from 'pages/dashboard/Routes';

const App = () => (
   <Router>
      <Routes>
         {HomeRoutes}
         {DashboardRoutes}
      </Routes>
   </Router>
);

if (isProduction) {
   console.log('🖥 Running in Production Environment');
   disableReactDevTools();
   root.render(
      <React.StrictMode>
         <App />
      </React.StrictMode>
   );
} else {
   console.log('🔬 Running in Development Environment');
   root.render(<App />);
}
