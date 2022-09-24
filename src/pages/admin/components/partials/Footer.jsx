import React, { useEffect } from 'react';
import useFetch from '../../../../helpers/useFetch';

// Assets
import '../../assets/css/admin.scss';

const Header = () => {
   const { request, loading, data, error } = useFetch();
   const render = (children) => (
      <header>
         <span>Request Test: {children || null}</span>
      </header>
   );

   useEffect(() => {
      (() => request('https://jsonplaceholder.typicode.com/todos/'))();
   }, [request]);

   if (error) return render(`Error | ${error.message} 😔`);
   if (loading) return render('Loading...');
   if (data) {
      // console.table(data);
      return render('Sucess ✅');
   }

   return render();
};

export default Header;
