import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// Components
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

const HomeLayout = () => {
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
