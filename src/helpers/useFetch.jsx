import { useState, useCallback } from 'react';

const useFetch = () => {
   const [data, setData] = useState(null);
   const [error, setError] = useState(false);
   const [loading, setLoading] = useState(false);

   const request = useCallback(async (url, options) => {
      setData(null);
      setError(false);
      setLoading(true);

      try {
         const response = await fetch(url, options);

         if (response.status !== 200) throw new Error(response.status);

         const json = await response.json();

         setData(json);
      } catch (error) {
         setData(null);
         setError(error);
      } finally {
         setLoading(false);
      }
   }, []);

   return { data, error, loading, request };
};

export default useFetch;
