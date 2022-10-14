import MySQL from '../../helpers/mysql.js'; // npm i mysql2

(async () => {
   const mysql = new MySQL();

   mysql.verbose = true; // default: false | Print the query and params to console

   // Single column update
   const way1 = await mysql.update({
      table: 'cats', // required
      set: ['name', 'Jerry'], // required
      where: '`name` = ?', // optional
      limit: 1, // optional
      params: ['Tom'], // optional
   });

   // Multiple columns update
   const way2 = await mysql.update({
      table: 'cats', // required
      set: [
         ['id', 10],
         ['name', 'Jerry'],
      ], // required
      where: '`id` = ?', // optional
      limit: 1, // optional
      params: [10], // optional
   });

   mysql.end();

   // QUERY: "UPDATE `cats` SET `name` = ? WHERE `name` = ? LIMIT 1;"
   // PARAMS: [ 'Jerry', 'Tom' ]
   console.log(way1); // Returns: affectedRows

   // QUERY: "UPDATE `cats` SET `id` = ?, `name` = ? WHERE `id` = ? LIMIT 1; [ 10, 'Jerry', 10 ]"
   // PARAMS: [ 10, 'Jerry', 10 ]
   console.log(way2); // Returns: affectedRows
})();
