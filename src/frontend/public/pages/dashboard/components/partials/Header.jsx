import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
   return (
      <header>
         <NavLink to='/' end>
            👇🏻 Home
         </NavLink>
         <NavLink to='/about'>🧑🏻‍💻 About</NavLink>
         <NavLink to='/put-anything-here'>🔗 Broken Link</NavLink>
         <NavLink to='/dashboard'>🏠 Dashboard</NavLink>
      </header>
   );
};

export default Header;
