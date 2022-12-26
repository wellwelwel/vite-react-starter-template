import { MySQL } from 'mysql2-orm';

const mysql = new MySQL({
   host: '',
   port: 3306,
   user: '',
   password: '',
   database: '',
});

export default mysql;
