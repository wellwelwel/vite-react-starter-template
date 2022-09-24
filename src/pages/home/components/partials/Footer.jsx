import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
   return (
      <footer>
         <Link to='/'>Home</Link>
         <Link to='/about'>About</Link>
         <Link to='/admin'>Admin</Link>
         <Link to='/admin/about'>🔗 Broken Link</Link>
      </footer>
   );
};

export default Footer;
