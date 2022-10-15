import bcrypt from 'bcryptjs'; // npm i bcryptjs

const password = 'pass';

(async () => console.log(await bcrypt.hash(password, 10)))();
