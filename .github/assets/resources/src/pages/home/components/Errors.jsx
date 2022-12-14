import React from 'react';
import { Link } from 'react-router-dom';
import { head } from 'node-and-vite-helpers';

const Errors = () => {
   head.title('404');

   return (
      <main>
         <Link to='/' replace>
            Back
         </Link>
      </main>
   );
};

export default Errors;
