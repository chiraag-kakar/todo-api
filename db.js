const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password:"Chiraag@001",
    database:"todo_datastore",
    host:"localhost",
    port:5432

});

module.exports = pool;