import React from 'react';
import { Outlet } from 'react-router-dom';
import * as head from '../../helpers/head';

// Assets
import './assets/css/styles.scss';
import favicon from './assets/images/favicon.svg';

// Components
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

const HomeLayout = () => {
   head.themeColor('#6c46bf');
   head.favicon(favicon);
   document.querySelector('#root').classList = 'home';

   return (
      <>
         <Header />
         <Outlet />
         <Footer />
      </>
   );
};

export default HomeLayout;
