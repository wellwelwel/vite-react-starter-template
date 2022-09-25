import React from 'react';
import { Outlet } from 'react-router-dom';
import * as head from '../../helpers/head';
import { s } from '../../helpers/selectors';

// Components
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

const AdminLayout = () => {
   head.themeColor('#2e006a');
   s('#root').classList = 'admin';

   return (
      <>
         <Header />
         <Outlet />
         <Footer />
      </>
   );
};

export default AdminLayout;
