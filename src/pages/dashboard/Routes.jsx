import React from 'react';
import { Route } from 'react-router-dom';
import doLazy from '../../utils/doLazy';

const Layout = doLazy(import('./Layout'));
const Dashboard = doLazy(import('./components/Dashboard'));

const Routes = () => {
   return (
      <Route element={Layout}>
         <Route path='/dashboard' element={Dashboard} />
      </Route>
   );
};

export default Routes;
