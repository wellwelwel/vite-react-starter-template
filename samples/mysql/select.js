import MySQL from '#helpers/mysql'; // npm i mysql2

(async () => {
   const mysql = new MySQL();

   mysql.verbose = true; // default: false | Print the query and params to console

   const cats = await mysql.select({
      columns: ['id', 'name'], // default: '*' | Accepts a string with columns or an array
      table: 'cats', // required
      where: '`id` IN(?, ?, ?)', // optional
      params: [1, 3, 4], // optional
      limit: 2, // optional
      orderBy: ['name', 'DESC'], // optional | [ 'column' ] || [ 'column', 'ASC' | 'DESC' ]
   });

   mysql.end();

   // QUERY: "SELECT `id`, `name` FROM `cats` WHERE `id` IN(?, ?, ?) ORDER BY `name` DESC LIMIT 2;"
   // PARAMS: [ 1, 3, 4 ]
   console.log(cats); // Query result
})();
