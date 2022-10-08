import React, { useEffect } from 'react';
import useFetch from 'hooks/useFetch';

const Footer = () => {
   const { request, isFetching, data, error } = useFetch();

   useEffect(() => {
      (() => request('https://jsonplaceholder.typicode.com/posts/2'))();
   }, []);

   return (
      <footer>
         <span>
            {isFetching && 'Loading...'}
            {error && `${error.message} 😔`}
            {data && 'Success ✅'}
         </span>
      </footer>
   );
};

export default Footer;
