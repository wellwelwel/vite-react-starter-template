import React from 'react';
import head from '#helpers/head';

const Dashboard = () => {
   head.title('Dashboard | React Basic Starter');
   head.meta('description', 'A dashboard description');

   return (
      <main id='dashboard'>
         <h2>🪐 This is an alternative route</h2>
      </main>
   );
};

export default Dashboard;
