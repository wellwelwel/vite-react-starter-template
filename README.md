<h2 align="center">Basic Vite & React Starter Template</h2>
<p align="center">😉 This is just a <b>personal</b> template to start a ReactJS Project</p>

### 🚀 Playground

-  You can see it in action at: [StackBlitz](https://stackblitz.com/edit/node-gkypjp)

<hr />

### 📝 Notes

-  Commands

   -  `npm i`, then:
      -  `npm start` to start a Vite localhost
      -  `npm run build` to build the project
      -  `npm run clean` if you want work with a empty Home 🏠
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

-  #### selectors

   -  An example of using:

      ```jsx
      import * from '../helpers/selectors';
      // import { s, sAll, sEl, sElAll } from '../helpers/selectors';

      s('#id');                     // document.querySelector('#id');
      sAll('.class');               // document.querySelectorAll('.class');
      sEl(element, '.child');       // element.querySelector('.child');
      sElAll(element, '.childs');   // element.querySelectorAll('.childs');
      ```

-  #### head

   -  An example of using:

      ```jsx
      import head from '../helpers/head';
      import { favicon } from '../favicon.svg';

      /**
       * These functions check if an element already exists in head
       * If exists, update element atribute, otherwise creates the element in head
       **/
      head.title('Home');
      head.meta('theme-color', '#6c46bf');
      head.link('canonical', 'https://site.com/');
      head.favicon(favicon);
      head.faviconBase64('data:image/png;base64,iVBO0KGN...ErkJg==');

      /**
       * This function creates any custom element in head
       * Interesting to use for advanced properties, SEO, etc.
       * @param {array} attributes is optional
       * @param {string} textContent is optional
       **/

      const gtag = 'XXXXXXXXXX';

      head.createElement({
         element: 'script',
         attributes: [
            {
               name: 'src',
               value: `https://www.googletagmanager.com/gtag/js?id=G-${gtag}`,
            },
            {
               name: 'async',
            },
         ],
      });

      head.createElement({
         element: 'script',
         textContext: `
            window.dataLayer = window.dataLayer || []
            function gtag() {
               dataLayer.push(arguments)
            }
            gtag('js', new Date())
            gtag('config', 'G-${gtag}')
         `,
      });
      ```

-  #### setTime

   -  An example of using:

      ```jsx
      import setTime from '../helpers/setTime';

      setTime(1000); // 1000
      setTime('1s'); // 1000
      setTime('1m'); // 60000
      setTime('1h'); // 3600000
      ```

<hr />

### ⚛️ Hooks

#### useFetch (with [Axios](https://axios-http.com/ptbr/docs/api_intro))

-  A simple example of using:

   ```jsx
   import useFetch from '../hooks/useFetch';

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
   import useFetch from '../hooks/useFetch';

   () => {
      const axiosCreate = {
         baseURL: 'https://jsonplaceholder.typicode.com',
         timeout: 10000,
      };
      const { request, isFetching, data, error } = useFetch(axiosCreate);

      useEffect(() => {
         (() => {
            const options = {
               method: 'get', // default: get
               revalidateOnFocus: true, // default: false
               verbose: true, // default: false
               refetchAtEvery: '1m', // default: null
               minInterval: '30s', // default: 1s
               observe: 'span#request', // default: null
            }; // You can extend any Axios options here

            request('posts/1', options);
         })();
      }, []);

      return (
         <span id='#request'>
            {isFetching && 'Loading...'}
            {error && error.message}
            {data && 'Success'}
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
