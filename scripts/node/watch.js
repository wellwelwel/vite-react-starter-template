import watch from 'node-watch';
import { exec } from 'child_process';
import fs from 'fs';

const watcher = watch('./', { recursive: true });

const events = {
   update: (file) => {
      exec(`rsync -av ${file} docker/app/${file}`);
      console.log(`\x1b[1m\x1b[32mUpdated:\x1b[0m  ./${file} \x1b[32m➜\x1b[0m ./docker/app/${file}`);
   },
   remove: (file) => {
      exec(`rm -rf docker/app/${file}`);
      console.log(`\x1b[1m\x1b[31mRemoved:\x1b[0m  ./${file} \x1b[31m➜\x1b[0m ./docker/app/${file}`);
   },
};

if (!fs.existsSync('./docker/app')) exec('mkdir -p docker/app');

watcher.on('change', (event, file) => {
   const blacklist = {
      dot: /\.(github|vscode|dockerignore|eslintrcjs|gitignore|prettierignore|prettierrc|stackblitzrc)/,
      start: /^(bash|node_modules|scripts|src|docker|Dockerfile|vite.config.js|index.html)/,
      type: /(.+)\.md$/,
      custom: /^package(-lock)?\.json$/,
      test: (file) =>
         blacklist.dot.test(file) ||
         blacklist.start.test(file) ||
         blacklist.type.test(file) ||
         blacklist.custom.test(file),
   };

   if (/^docker\/app|\.(git|DS_Store)/.test(file)) return;
   if (blacklist.test(file)) {
      console.log(`\x1b[1m\x1b[34mIgnoring:\x1b[0m \x1b[2m./${file}\x1b[0m`);
      return;
   }

   events[event](file);
});
