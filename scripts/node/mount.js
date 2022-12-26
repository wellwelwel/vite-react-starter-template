import 'dotenv/config';
import { resolve } from 'path';
import fs from 'fs';
import { EOL } from 'os';
import { execSync as exec } from 'child_process';

const [, , ...args] = process.argv;
const force = args.includes('--force');

(() => {
   const ignoreList = fs.readFileSync(resolve('docker/.dockerignore'), 'utf-8').split(EOL);
   const excludeList = [];

   ignoreList.forEach((toIgnore) => {
      const path = toIgnore?.trim().replace(/^\.\//g, '');

      if (path?.length === 0 || /^(\s+)?#/g.test(path)) return;

      excludeList.push(`--exclude=${path}`);
   });

   if (force) exec('rm -rf docker/app');
   exec(['mkdir -p docker/app', `rsync -av ${excludeList.join(' ')} ./ docker/app/`].join(' && '));
})();

(() => {
   const packageJSON = JSON.parse(fs.readFileSync(resolve('package.json'), 'utf-8'));

   // Uninstall React devlopment dependecies
   const reactDependecies = JSON.parse(process.env.REACT_DEPENDENCIES);

   reactDependecies.forEach((dependency) => {
      if (packageJSON.dependencies.hasOwnProperty(dependency)) delete packageJSON.dependencies[dependency];
   });

   for (const key in packageJSON.dependencies) {
      packageJSON.dependencies[key] = packageJSON.dependencies[key].replace(/[^0-9.]/g, '');
   }

   // Mount clean package.json
   const newPackageJSON = {
      dependencies: packageJSON.dependencies,
      type: 'module',
      imports: packageJSON.imports,
   };

   fs.writeFileSync('./docker/app/package.json', JSON.stringify(newPackageJSON, null, 3));
   exec('cd ./docker/app && npm i --ignore-scripts');
   exec('rm -rf ./dist');
})();
