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

#### Selectors

-  An example of using:

   ```jsx
   import { s, sAll } from '../helpers/selectors';

   s('#id');
   sAll('.class');
   s('#id').s('.child');
   s('#id').sAll('.childs');
   ```

   -  This helper uses native Javascript (browser)

#### Head

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
    **/
   head.createElement({
      element: 'link',
      attributes: [
         {
            name: 'rel',
            value: 'alternate',
         },
         {
            name: 'hreflang',
            value: 'pt-BR',
         },
         {
            name: 'href',
            value: '/langs/pt-BR',
         },
      ],
      textContent: 'Brazilian Portuguese',
   });
   ```

   -  This helper uses native Javascript (browser)

#### useFetch

-  An example of using:

   ```jsx
   import useFetch from '../helpers/useFetch';

   const Element = () => {
      const { request, loading, data, error } = useFetch();
      const render = (children) => <span>Request Test: {children || null}</span>;

      useEffect(() => {
         (() => request('https://jsonplaceholder.typicode.com/posts/'))();
      }, [request]);

      if (error) return render(`Error | ${error.message} 😔`);
      if (loading) return render('Loading...');
      if (data) return render('Success ✅');

      return render();
   };
   ```

   -  This helper is a React Custom Hook

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
