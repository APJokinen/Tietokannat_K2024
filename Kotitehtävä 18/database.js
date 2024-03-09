const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'netuser2',
  password: 'netpass2',
  database: 'arviointitietokanta'
});
module.exports = connection;