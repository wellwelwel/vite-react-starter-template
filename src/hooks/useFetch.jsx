import { useState, useCallback, startTransition } from 'react';
import axios from 'axios';
import { setTime } from 'node-and-vite-helpers';

const dispatched = {
   focusEvents: [],
   visibilityEvents: [],
   intervals: [],
};

const documentIsVisible = () => document.visibilityState === 'visible';
const observe = (selector, callback = () => {}) => {
   const element = document.querySelector(selector);
   const observer = new IntersectionObserver((entries) => entries[0]['intersectionRatio'] > 0 && callback(), {
      root: document.documentElement,
   });

   element && observer.observe(element);
};

const useFetch = (axiosCreate = {}, deps = []) => {
   const [isFetching, setIsFetching] = useState(true);
   const [data, setData] = useState(null);
   const [error, setError] = useState(false);
   const api = axios.create({ timeout: 10000, ...axiosCreate });

   let isBusy = false;

   const request = useCallback(
      (
         url,
         options = {
            method: 'get',
            revalidateOnFocus: false,
            verbose: false,
            refetchAtEvery: null,
            minInterval: 1000,
            observe: null,
         }
      ) => {
         if (isBusy) return;
         isBusy = true;

         const refetch = () => {
            if (isBusy) return;

            if (!options?.observe && documentIsVisible()) request(url, options);
            else if (options?.observe && documentIsVisible()) {
               observe(options.observe, () => request(url, options));
            }
         };

         if (typeof error === 'object') setIsFetching(true);

         startTransition(() => {
            api[options?.method || 'get'](url, options)
               .then((response) => {
                  if (response.status !== 200) throw new Error(response.status);
                  if (options?.verbose) console.log(response);

                  setData(response.data);
                  setIsFetching(false);
                  setError(false);

                  /* Refetch on Visibility */
                  if (options?.revalidateOnFocus && !dispatched.visibilityEvents.includes(url)) {
                     dispatched.visibilityEvents.push(url);
                     window.addEventListener('visibilitychange', refetch);
                  }

                  /* Refetch on Focus */
                  if (options?.revalidateOnFocus && !dispatched.focusEvents.includes(url)) {
                     dispatched.focusEvents.push(url);
                     window.addEventListener('focus', refetch);
                  }

                  /* Refech every... */
                  if (options?.refetchAtEvery && !dispatched.intervals.includes(url)) {
                     const timer = setTime(options.refetchAtEvery);

                     dispatched.intervals.push(url);
                     setInterval(refetch, timer);
                  }
               })
               .catch((error) => {
                  if (options?.verbose) console.log(error);

                  setData(null);
                  setIsFetching(false);
                  if (error.request.status !== 200) setError({ message: error.request.status });
                  else setError(error);
               })
               .finally(() => {
                  const timer = options?.minInterval ? setTime(options.minInterval) : 1000;

                  setTimeout(() => {
                     isBusy = false;
                  }, timer);
               });
         });
      },
      deps
   );

   return { data, error, isFetching, request };
};

export default useFetch;
