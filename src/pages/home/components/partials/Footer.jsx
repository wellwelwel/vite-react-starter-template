import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
   return (
      <footer>
         <NavLink to='/' end>
            🏠 Home
         </NavLink>
         <NavLink to='/about'>🧑🏻‍💻 About</NavLink>
         <NavLink to='/put-anything-here'>🔗 Broken Link</NavLink>
         <NavLink to='/dashboard'>👆🏻 Dashboard</NavLink>
      </footer>
   );
};

export default Footer;
