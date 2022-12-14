<h2 align="center">Basic Vite & React Starter Template</h2>
<p align="center">😉 This is just a <b>personal</b> template to start a ReactJS Project</p>

### 🚀 Playground

-  See it in action at: [StackBlitz](https://stackblitz.com/edit/node-gkypjp)

<hr />

### 📝 Notes

-  Commands

   -  `npm run init`, then:
      -  `npm run dev:vite` to start a React + Vite localhost
      -  `npm run server:preview` to preview the built project
      -  `npm run server:build` to build the project
      -  `npm run init:clean` to work with a empty Home 🏠
         -  Maybe, this command doesn't work in some Windows versions

-  Testing Routes in an Apache Server

   ```apache
      Options -MultiViews
      RewriteEngine On
      RewriteCond %{REQUEST_FILENAME} !-f
      RewriteRule ^ index.html [QSA,L]
   ```

<hr />

### 💡 Helpers

-  See in [node-and-vite-helpers](https://github.com/wellwelwel/node-and-vite-helpers)

<hr />

### ⚛️ Hooks

#### [useFetch](./src/hooks/useFetch.jsx) (with [Axios](https://axios-http.com/ptbr/docs/api_intro))

-  A simple example of using:

   ```jsx
   import useFetch from '#hooks/useFetch';

   () => {
      const { request, isFetching, data, error } = useFetch();
      request('https://jsonplaceholder.typicode.com/posts/1');

      return (
         <span>
            {isFetching && 'Loading...'}
            {error && error.message}
            {data && data.title}
         </span>
      );
   };
   ```

-  An advanced example of using with all options:

   ```jsx
   import React, { useEffect } from 'react';
   import useFetch from '#hooks/useFetch';

   () => {
      const axiosCreate = {
         baseURL: 'https://jsonplaceholder.typicode.com',
         timeout: 10000,
      };
      const {
         request,
         isFetching,
         data: post,
         error,
      } = useFetch(axiosCreate, [
         /* deps */
      ]);

      useEffect(() => {
         (() => {
            const options = {
               method: 'get', // default: get
               revalidateOnFocus: true, // default: false
               verbose: true, // default: false
               refetchAtEvery: '1m', // default: null
               minInterval: '30s', // default: 1s
               observe: 'span#request', // default: null
            }; // The "options" can extend any Axios options

            request('posts/1', options);
         })();
      }, []);

      return (
         <span id='#request'>
            {isFetching && 'Loading...'}
            {error && error.message}
            {post && 'Success'}
         </span>
      );
   };
   ```

   -  **`methods`:** `get`, `delete`, `head`, `options`, `post`, `put` and `patch`
   -  **`revalidateOnFocus`:** Refetch each time the page comes back into focus
   -  **`verbose`:** Print response to console
   -  **`refetchAtEvery`:** Refetch every time as defined when document is in focus (setInterval)
   -  **`minInterval`:** Prevents a re-request in a defined minimum interval
   -  **`observe`:** Prevents a re-request while the set element is not visible in DOM

<hr />

### Credits

| Contributors | GitHub                                                                             |
| ------------ | ---------------------------------------------------------------------------------- |
| Author       | [![wellwelwel](./.github/assets/images/author.svg)](https://github.com/wellwelwel) |

<hr />

-  Libraries:

   -  [React](https://reactjs.org/)
   -  [Vite](https://vitejs.dev/)

-  Plug-ins:

   -  [Sass](https://github.com/sass/sass)
   -  [PostCSS](https://github.com/postcss)
   -  [Autoprefixer](https://github.com/postcss/autoprefixer)
   -  [cssnano](https://github.com/cssnano/cssnano)
