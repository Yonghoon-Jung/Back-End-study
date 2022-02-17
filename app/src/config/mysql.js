const mysql = require("mysql2/promise");

const { DB_HOST, DB_DATABASE, DB_USER, DB_PSWORD } = process.env;

const db = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PSWORD,
  database: DB_DATABASE,
});

// db.connect();

module.exports = db;
