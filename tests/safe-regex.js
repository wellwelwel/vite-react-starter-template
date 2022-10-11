import safe from 'safe-regex';

const list = [
   /(<([^>]+)>)/gim,
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
