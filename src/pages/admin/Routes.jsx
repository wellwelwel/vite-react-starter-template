import React from 'react';
import { Route } from 'react-router-dom';

import AdminLayout from './Layout';
import Admin from './components/Admin';

const AdminRoutes = () => {
   return (
      <Route element={<AdminLayout />}>
         <Route path='/admin' element={<Admin />} />
      </Route>
   );
};

export default AdminRoutes;
