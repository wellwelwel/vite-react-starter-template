import connect from 'connect';
import vhost from 'vhost';
import main from './hosts/main.js';

const server = connect();
const port = 3000;

server.use(vhost('localhost', main));
server.listen(port, () =>
   console.log(`\n\n\x1b[32m➜ \x1b[0m\x1b[1mExpress\x1b[0m listening in: \x1b[34mhttp://localhost:${port}/\x1b[0m 🎧\n`)
);
