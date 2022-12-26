import React from 'react';
import { head } from 'node-and-vite-helpers';

const About = () => {
   head.title('About | React Basic Starter');
   head.meta('description', 'An about description');

   return (
      <main id='about'>
         <h2>
            This isn't about you 🎭
            <br />
            🚦 If you arrived here, the routes are working
         </h2>
      </main>
   );
};

export default About;
