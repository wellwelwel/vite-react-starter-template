import React from 'react';
import { head } from 'node-and-vite-helpers';

const Home = () => {
   head.title('Home | React Basic Starter');
   head.meta('description', 'A home description');

   return (
      <main id='home'>
         <h2>🤹 An amazing Homepage</h2>
      </main>
   );
};

export default Home;
