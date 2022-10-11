import htmlEntities from './htmlEntities.js';
import striptag from './striptag.js';

const xss = (string, strip = true, entities = true) => {
   string = String(string)?.trim() || '';

   if (strip) string = striptag(string);
   if (entities) string = htmlEntities(string);

   return string?.trim() || '';
};

export default xss;
