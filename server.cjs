const connect = require('connect');
const vhost = require('vhost');

const server = connect();
const port = 3000;

const hosts = [
   {
      baseURL: 'localhost',
      app: './hosts/main.cjs',
   },
   {
      baseURL: 'www.localhost',
      app: './hosts/main.cjs',
   },
   {
      /* Keep in last position */
      baseURL: '*.localhost',
      app: './hosts/404.cjs',
   },
];

for (const host of hosts) server.use(vhost(host.baseURL, require(host.app)));

server.listen(port, () => {
   const domains = hosts.map((host) => `    ➜ \x1b[34mhttp://${host.baseURL}:${port}/\x1b[0m`);

   // Remove error route
   domains.pop();
   console.log(
      [
         `\n\n`,
         `\x1b[0m\x1b[1mExpress \x1b[32m+\x1b[0m\x1b[1m Nodemon\x1b[0m`,
         `\n\n`,
         `  \x1b[1m🚀  Listening\x1b[0m in:`,
         `\n\n`,
         domains.join('\n'),
         `\n`,
      ].join('')
   );
});
