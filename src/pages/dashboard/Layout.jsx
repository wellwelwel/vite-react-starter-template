import React from 'react';
import { Outlet } from 'react-router-dom';
import * as head from '../../helpers/head';
import { s } from '../../helpers/selectors';

// Assets
import './assets/css/styles.scss';

// Components
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

const DashboardLayout = () => {
   head.themeColor('#2e006a');
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
