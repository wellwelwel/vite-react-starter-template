import React from 'react';
import { Route } from 'react-router-dom';

import HomeLayout from '../pages/home/Layout';
import Home from '../pages/home/components/Home';
import About from '../pages/home/components/About';
import Errors from '../pages/home/components/Errors';

const HomeRoutes = () => {
   return (
      <Route element={<HomeLayout />}>
         <Route path='/' exact element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='*' errorElement element={<Errors />} status={404} />
      </Route>
   );
};

export default HomeRoutes;
