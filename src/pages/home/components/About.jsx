import React from 'react';
import * as head from '../../../helpers/head';

const About = () => {
   head.title('About | React Basic Starter');

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
