import React from 'react';
import { Route } from 'react-router-dom';

import HomeLayout from './Layout';
import Home from './components/Home';
import Errors from './components/Errors';

const HomeRoutes = () => {
   return (
      <Route element={<HomeLayout />}>
         <Route path='/' exact element={<Home />} />
         <Route path='*' element={<Errors />} status={404} />
      </Route>
   );
};

export default HomeRoutes;
