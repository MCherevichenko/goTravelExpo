const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 3306,
  database: 'gotravel',
});

module.exports = pool;
