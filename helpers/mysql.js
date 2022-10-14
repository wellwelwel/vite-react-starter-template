import 'dotenv/config';
import mysql from 'mysql2/promise';

const login = {
   host: process.env.DB_HOST,
   port: process.env.DB_PORT,
   user: process.env.DB_USER,
   password: process.env.DB_PASS,
   database: process.env.DB_NAME,
};

const defaultOptions = {
   select: {
      columns: '*' || [],
      table: '',
      where: null,
      limit: false,
      orderBy: [null, 'ASC'],
      params: [],
   },
   insert: {
      table: '',
      columns: [],
      values: [],
   },
   update: {
      table: '',
      set: [],
      where: null,
      limit: false,
      params: [],
   },
};

const forceValuesToArray = (parentArray) => {
   if (!Array.isArray(parentArray[0])) return [parentArray];
   return parentArray;
};

const setInsertValues = (parentArray) => {
   const items = forceValuesToArray(parentArray);
   const params = [];

   const setValues = items.map((item) => {
      const values = item.map((value) => {
         params.push(value);

         return '?';
      });

      return `(${values.join(', ')})`;
   });

   return {
      values: setValues,
      params,
   };
};

export default class MySQL {
   constructor() {
      this.connect = async () => {
         if (!this?.connection) this.connection = await mysql.createConnection(login);
      };

      this.select = async (options = { ...defaultOptions.select }) => {
         await this.connect();

         const defaults = { ...defaultOptions.select, ...options };
         const { table, params } = defaults;

         const columns =
            typeof defaults.columns === 'string'
               ? defaults.columns
               : defaults.columns.map((column) => `\`${column}\``).join(', ');
         const where = defaults.where ? ` WHERE ${defaults.where}` : '';
         const orderBy = defaults.orderBy[0]
            ? ` ORDER BY \`${defaults.orderBy[0]}\` ${defaults?.orderBy[1] || 'ASC'}`
            : '';
         const limit = defaults.limit ? ` LIMIT ${defaults.limit}` : '';

         const query = `SELECT ${columns} FROM \`${table}\`${where}${orderBy}${limit};`;
         const [rows] = await this.connection.execute(query, params);

         this.verbose && console.log(query, params);

         if (defaults.limit === 1) return rows[0] || false;
         return rows || false;
      };

      this.insert = async (options = { ...defaultOptions.insert }) => {
         await this.connect();

         const defaults = { ...defaultOptions.insert, ...options };
         const { table } = defaults;

         const { values, params } = setInsertValues(defaults.values);

         const columns =
            defaults?.columns?.length > 0
               ? ' (' + defaults.columns.map((column) => `\`${column}\``).join(', ') + ')'
               : '';
         const query = `INSERT INTO \`${table}\`${columns} VALUES ${values.join(', ')};`;

         this.verbose && console.log(query, params);

         const [results] = await this.connection.execute(query, params);

         return results?.insertId || false;
      };

      this.update = async (options = { ...defaultOptions.update }) => {
         await this.connect();

         const defaults = { ...defaultOptions.update, ...options };
         const { table } = defaults;

         const setParams = [];
         const set = forceValuesToArray(defaults.set)
            .map(([column, value]) => {
               setParams.push(value);
               return `\`${column}\` = ?`;
            })
            .join(', ');
         const where = defaults.where ? ` WHERE ${defaults.where}` : '';
         const limit = defaults.limit ? ` LIMIT ${defaults.limit}` : '';
         const params = [...setParams, ...defaults.params];

         const query = `UPDATE \`${table}\` SET ${set}${where}${limit};`;
         const [results] = await this.connection.execute(query, params);

         this.verbose && console.log(query, params);

         return results?.affectedRows || false;
      };

      this.execute = async (query, params = null) => {
         await this.connect();

         return (await this.connection.execute(query, params)) || false;
      };

      this.end = () => this.connection.end();

      this.verbose = false;
   }
}
