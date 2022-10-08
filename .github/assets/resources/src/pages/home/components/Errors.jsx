import React from 'react';
import { Link } from 'react-router-dom';
import * as head from 'helpers/head';

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
