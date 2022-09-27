import React from 'react';
import { Route } from 'react-router-dom';
import doLazy from '../../utils/doLazy';

import Dashboard from './components/Dashboard';

const Layout = () => import('./Layout');

const Routes = (
   <Route element={doLazy(Layout)}>
      <Route path='/dashboard' element={<Dashboard />} />
   </Route>
);

export default Routes;
