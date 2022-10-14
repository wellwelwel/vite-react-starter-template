import MySQL from '../../helpers/mysql.js'; // npm i mysql2

(async () => {
   const mysql = new MySQL();

   const [cats] = await mysql.execute('SELECT * FROM `cats`');
   const [toms] = await mysql.execute('SELECT * FROM `cats` WHERE `name` = ?', ['Tom']);

   mysql.end();

   console.log(cats, '\n', toms); // Query result
})();
