import React from 'react';
import { Outlet } from 'react-router-dom';
import * as head from '../../helpers/head';

// Components
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

const HomeLayout = () => {
   head.themeColor('#6c46bf');
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
