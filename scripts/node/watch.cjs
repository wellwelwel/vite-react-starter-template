const watch = require('node-watch').default;
const { exec } = require('child_process');

const watcher = watch('./', { recursive: true });

const events = {
   update: (file) => {
      exec(`rsync -av ${file} docker/app/${file}`);
      console.log(`\x1b[1m\x1b[32mUpdated:\x1b[0m ./${file} \x1b[32m➜\x1b[0m ./docker/app/${file}`);
   },
   remove: (file) => {
      exec(`rm -rf docker/app/${file}`);
      console.log(`\x1b[1m\x1b[31mRemoved:\x1b[0m ./${file} \x1b[31m➜\x1b[0m ./docker/app/${file}`);
   },
};

watcher.on('change', (event, file) => {
   const blacklist = {
      dot: /\.(git|github|vscode|dockerignore|DS_Store|eslintrcjs|gitignore|prettierignore|prettierrc|stackblitzrc)/,
      start: /^(bash|docker|node_modules|scripts|src|docker-compose.yml|Dockerfile|vite.config.js|index.html)/,
      type: /(.+)?\.(md)/,
      custom: /package(.+)?\.json/,
      test: (file) =>
         blacklist.dot.test(file) ||
         blacklist.start.test(file) ||
         blacklist.type.test(file) ||
         blacklist.custom.test(file),
   };

   if (blacklist.test(file)) return;

   events[event](file);
});
