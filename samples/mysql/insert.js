import MySQL from '#helpers/mysql'; // npm i mysql2

(async () => {
   const mysql = new MySQL();

   mysql.verbose = true; // default: false | Print the query and params to console

   // Put only values
   const way1 = await mysql.insert({
      table: 'cats', // required
      values: [null, 'Tom'], // required | Put "?" for each value and split values to params
   });

   // Put custom values by columns
   const way2 = await mysql.insert({
      table: 'cats', // required
      columns: ['name'], // optional
      values: ['Tom'], // required | Put "?" for each value and split values to params
   });

   // Insert multiple rows
   const way3 = await mysql.insert({
      table: 'cats', // required
      columns: ['name'], // optional
      values: [null, 'Tom'], // without columns
      values: [['Tom'], ['Jerry']], // required | Put "?" for each value and split values to params
   });

   mysql.end();

   // QUERY: "INSERT INTO `cats` VALUES (?, ?);"
   // PARAMS: [ null, 'Tom' ]
   console.log(way1); // Returns: last insert id

   // QUERY: "INSERT INTO `cats` (`name`) VALUES (?);"
   // PARAMS: [ 'Tom' ]
   console.log(way2); // Returns: last insert id

   // QUERY: "INSERT INTO `cats` (`name`) VALUES (?), (?);"
   // PARAMS: [ 'Tom', 'Jerry' ]
   console.log(way3); // Returns: first row id from multiple insert
})();
