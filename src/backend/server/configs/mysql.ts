import 'dotenv/config';
import { MySQL } from 'mysql2-orm';

const isProduction = process.env.NODE_ENV === 'production';
const mysql = new MySQL({
   host: isProduction ? process.env?.DB_HOST || '127.0.0.1' : '127.0.0.1',
   port: isProduction ? 3306 : (process.env?.DB_PORT && 3306) || 3306,
   user: process.env?.DB_USER || '',
   password: process.env?.DB_PASS || '',
   database: process.env?.DB_NAME || '',
});

export default mysql;
