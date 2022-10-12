import safe from 'safe-regex';

const list = [

   /* Internal | Devlopment */
   /\.(git|github|vscode|dockerignore|DS_Store|eslintrcjs|gitignore|prettierignore|prettierrc|stackblitzrc)/,
   /^(bash|docker|node_modules|scripts|src|docker-compose.yml|Dockerfile|vite.config.js|index.html)/,
   /^package(-lock)?\.json$/,
   /(.+)\.md$/,

   /* Server | Front */
   /(<([^>]+)>)/gm,
   /image\/(.+);/,
   /^([0-9]+)(h|m|s)$/,
   /\.ico$/,
   /\.(css|json|js)$/,
   /assets/,
];

const errors = [];

list.forEach((item) => !safe(item) && errors.push(item));

if (errors.length > 0) console.error('\n🤡 Unsafe Regex ❌\n', errors, '\n');
else console.log('Everything is fine ✅');
