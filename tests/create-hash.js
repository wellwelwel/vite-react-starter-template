import bcrypt from 'bcrypt'; // npm i bcrypt

const password = 'pass';

(async () => console.log(await bcrypt.hash(password, 10)))();
