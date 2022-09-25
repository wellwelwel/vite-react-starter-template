import React from 'react';
import { Outlet } from 'react-router-dom';
import head from '../../helpers/head';

// Assets
import './assets/css/styles.scss';
import favicon from './assets/images/favicon.svg';

// Components
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

const HomeLayout = () => {
   head.meta('theme-color', '#6c46bf');
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
