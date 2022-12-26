import React, { useEffect, useRef } from 'react';
import useFetch from '#hooks/useFetch';

const Footer = () => {
   const mount = { onceEffect: useRef(true) };
   const { request, isFetching, data, error } = useFetch();

   useEffect(() => {
      if (!mount.onceEffect.current) return;

      request('https://jsonplaceholder.typicode.com/posts/2');

      return () => (mount.onceEffect.current = false);
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
