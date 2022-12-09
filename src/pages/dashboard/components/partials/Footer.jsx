import React, { useEffect } from 'react';
import useFetch from '#hooks/useFetch';

const Footer = () => {
   const mount = { onceEffect: true };
   const { request, isFetching, data, error } = useFetch();

   useEffect(() => {
      if (!mount.onceEffect) return;

      request('https://jsonplaceholder.typicode.com/posts/2');

      return () => (mount.onceEffect = false);
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
