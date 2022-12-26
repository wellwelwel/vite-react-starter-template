import React, { useEffect, useRef } from 'react';
import useFetch from '#hooks/useFetch';

const Header = () => {
   const mount = { onceEffect: useRef(true) };
   const axiosCreate = { baseURL: 'https://jsonplaceholder.typicode.com', timeout: 10000 };
   const { request, isFetching, data, error } = useFetch(axiosCreate);

   useEffect(() => {
      if (!mount.onceEffect.current) return;

      const options = {
         method: 'get', // default: get
         revalidateOnFocus: true, // default: false
         verbose: true, // default: false
         refetchAtEvery: '1m', // default: null
         minInterval: '30s', // default: 1s
         observe: '#root.home > header > span', // default: null
      }; // You can extend any Axios options here

      request('posts/1', options);

      return () => (mount.onceEffect.current = false);
   }, []);

   return (
      <header>
         <span>
            {isFetching && 'Loading...'}
            {error && `${error.message} 😔`}
            {data && 'Success ✅'}
         </span>
      </header>
   );
};

export default Header;
