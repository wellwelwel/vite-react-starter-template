import React from 'react';
import { Route } from 'react-router-dom';

import AdminLayout from '../pages/admin/Layout';
import Admin from '../pages/admin/components/Admin';

const AdminRoutes = () => {
   return (
      <Route element={<AdminLayout />}>
         <Route path='/admin' element={<Admin />} />
      </Route>
   );
};

export default AdminRoutes;
