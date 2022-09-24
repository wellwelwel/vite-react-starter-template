import React from 'react';
import { Link } from 'react-router-dom';

const Errors = () => {
   return (
      <main id='error'>
         <h2>🤔 I don't know what you want...</h2>
         <Link to='/' replace>
            ⏪ Back off, man! ✋🏻
         </Link>
      </main>
   );
};

export default Errors;
