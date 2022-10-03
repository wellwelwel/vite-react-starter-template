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
];

for (const host of hosts) server.use(vhost(host.baseURL, require(host.app)));

server.listen(port, () => {
   console.log(
      [
         `\n\n`,
         `\x1b[0m\x1b[1mExpress \x1b[32m+\x1b[0m\x1b[1m Nodemon\x1b[0m`,
         `\n\n`,
         `  \x1b[1m🚀  Listening\x1b[0m in:`,
         `\n\n`,
         hosts.map((host) => `    ➜ \x1b[34mhttp://${host.baseURL}:${port}/\x1b[0m`).join('\n'),
         `\n`,
      ].join('')
   );
});
