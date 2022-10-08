import React from 'react';
import { Outlet } from 'react-router-dom';
import head from 'helpers/head';
import { s } from 'helpers/selectors';

// Assets
import './assets/css/styles.scss';
import favicon from './assets/images/favicon.svg';

// Components
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

const DashboardLayout = () => {
   head.favicon(favicon);
   head.meta('theme-color', '#2e006a');
   s('#root').classList = 'dashboard';

   return (
      <>
         <Header />
         <Outlet />
         <Footer />
      </>
   );
};

export default DashboardLayout;
