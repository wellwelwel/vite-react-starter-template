import { config as dotenv } from 'dotenv';
import server from './apps/main/app.js';

dotenv();

(() => {
   const port = process.env.PORT;
   const hosts = JSON.parse(process.env.TRUSTED_HOSTS).map((host) => `    ➜ \x1b[34mhttp://${host}:${port}/\x1b[0m`);

   server.listen(port, () => {
      console.log(
         [
            `\n\n`,
            `\x1b[0m\x1b[1mExpress \x1b[32m+\x1b[0m\x1b[1m Nodemon\x1b[0m`,
            `\n\n`,
            `  \x1b[1m🚀  Listening\x1b[0m in:`,
            `\n\n`,
            hosts.join('\n'),
            `\n\n`,
         ].join('')
      );
   });
})();
