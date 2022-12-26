import React from 'react';
import { Outlet } from 'react-router-dom';

// Assets
import './assets/css/styles.scss';

// Components
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

const HomeLayout = () => {
   return (
      <>
         <Header />
         <Outlet />
         <Footer />
      </>
   );
};

export default HomeLayout;
