import React from 'react';
import { Route } from 'react-router-dom';
import doLazy from '../../utils/doLazy';

const HomeLayout = () => import('./Layout');
import Home from './components/Home';
import About from './components/About';
import Errors from './components/Errors';

const HomeRoutes = () => {
   return (
      <Route element={doLazy(HomeLayout)}>
         <Route path='/' exact element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='*' errorElement element={<Errors />} status={404} />
      </Route>
   );
};

export default HomeRoutes;
