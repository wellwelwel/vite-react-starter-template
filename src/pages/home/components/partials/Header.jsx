import React, { useEffect } from 'react';
import useFetch from '../../../../helpers/useFetch';

const Header = () => {
   const { request, loading, data, error } = useFetch();
   const render = (children) => (
      <header>
         <span>Request Test: {children || null}</span>
      </header>
   );

   useEffect(() => {
      (() => request('https://jsonplaceholder.typicode.com/posts/1'))();
   }, [request]);

   if (error) return render(`Error | ${error.message} 😔`);
   if (loading) return render('Loading...');
   if (data) return render('Success ✅');

   return render();
};

export default Header;
