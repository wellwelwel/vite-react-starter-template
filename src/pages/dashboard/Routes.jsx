import React from 'react';
import { Route } from 'react-router-dom';

import DashboardLayout from './Layout';
import Dashboard from './components/Dashboard';

const DashboardRoutes = () => {
   return (
      <Route element={<DashboardLayout />}>
         <Route path='/dashboard' element={<Dashboard />} />
      </Route>
   );
};

export default DashboardRoutes;
