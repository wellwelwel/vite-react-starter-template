import React from 'react';
import { Outlet } from 'react-router-dom';

// Components
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

const AdminLayout = () => {
   document.querySelector('#root').classList = 'admin';

   return (
      <>
         <Header />
         <Outlet />
         <Footer />
      </>
   );
};

export default AdminLayout;
