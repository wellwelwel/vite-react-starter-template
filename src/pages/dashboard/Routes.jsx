import React from 'react';
import { Route } from 'react-router-dom';
import doLazy from '../../utils/doLazy';

const Layout = () => import('./Layout');
import Dashboard from './components/Dashboard';

const Routes = () => {
   return (
      <Route element={doLazy(Layout)}>
         <Route path='/dashboard' element={<Dashboard />} />
      </Route>
   );
};

export default Routes;
