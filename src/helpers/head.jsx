import { s } from './selectors';

const createElement = (options = { element: 'meta', attributes: [], textContext }) => {
   const element = document.createElement(options.element);

   options?.attributes &&
      options.attributes.forEach((attribute) => element.setAttribute(attribute.name, attribute.value));

   if (options?.textContext) element.textContent = options.textContext;

   document.head.appendChild(element);
};

export const title = (text) => {
   const current = s('head title');

   // If already exists
   if (current) {
      current.textContent = text;
      return true;
   }

   createElement({ element: 'title', textContext: text });

   return true;
};

export const themeColor = (color) => {
   const current = s('head meta[name="theme-color"]');

   // If already exists
   if (current) {
      current.content = color;
      return true;
   }

   createElement({
      element: 'meta',
      attributes: [
         {
            name: 'name',
            value: 'theme-color',
         },
         {
            name: 'content',
            value: color,
         },
      ],
   });

   return true;
};

export const favicon = (importedIcon) => {
   const mimes = {
      gif: 'image/gif',
      ico: 'image/x-icon',
      icon: 'image/x-icon',
      jpeg: 'image/jpeg',
      jpg: 'image/jpeg',
      png: 'image/png',
      svg: 'image/svg+xml',
      webp: 'image/webp',
   };
   const current = s('head link[rel="icon"]');
   const type = mimes[importedIcon.split('.').pop().toLowerCase()];

   if (current) {
      current.href = importedIcon;
      current.type = type;
      return true;
   }

   createElement({
      element: 'link',
      attributes: [
         {
            name: 'rel',
            value: 'icon',
         },
         {
            name: 'href',
            value: importedIcon,
         },
         {
            name: 'type',
            value: type,
         },
      ],
   });
};
