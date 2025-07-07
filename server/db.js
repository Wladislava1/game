const mysql = require('mysql2/promise');

async function connectDB() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Wlada@2005',
    database: 'Game_custom'
  });
  console.log('Connected to MySQL database');
  return connection;
}

module.exports = connectDB;