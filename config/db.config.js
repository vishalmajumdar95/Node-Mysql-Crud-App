'use strict';
const mysql = require('mysql');

//local mysql db connection
const dbCon = mysql.createConnection({
  host     : process.env.HOSTNAME,
  user     : process.env.USER_NAME,
  password : process.env.USER_PASSWORD,
  database : process.env.DATABASE_NAME
});

dbCon.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = dbCon;