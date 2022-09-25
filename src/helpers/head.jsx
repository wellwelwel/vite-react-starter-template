import { s } from './selectors';

export const title = (text) => {
   const current = s('head title');

   // If already exists
   if (current) {
      current.textContent = text;
      return true;
   }

   // Create
   const element = document.createElement('title');

   element.textContent = text;

   document.head.appendChild(element);
};

export const themeColor = (color) => {
   const current = s('head meta[name="theme-color"]');

   // If already exists
   if (current) {
      current.content = color;
      return true;
   }

   // Create
   const meta = document.createElement('meta');

   meta.setAttribute('name', 'theme-color');
   meta.setAttribute('content', color);

   document.head.appendChild(meta);
};
