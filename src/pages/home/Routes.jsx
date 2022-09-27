import React from 'react';
import { Route } from 'react-router-dom';
import doLazy from '../../utils/doLazy';

const HomeLayout = doLazy(import('./Layout'));
const Home = doLazy(import('./components/Home'));
const About = doLazy(import('./components/About'));
const Errors = doLazy(import('./components/Errors'));

const HomeRoutes = () => {
   return (
      <Route element={HomeLayout}>
         <Route path='/' exact element={Home} />
         <Route path='/about' element={About} />
         <Route path='*' errorElement element={Errors} status={404} />
      </Route>
   );
};

export default HomeRoutes;
