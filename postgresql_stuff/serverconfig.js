const { Client } = require('pg');

const psqlClient = new Client({
    host: process.env.RWHOST,
    user: process.env.RWUSER,
    port: process.env.RWPORT,
    password: process.env.RWPASSWORD, 
    database: process.env.RWDATABASE
});

psqlClient.connect();

console.log("ONE:");
console.log(process.env.PGHOST);
console.log("TWO:");
console.log(process.env.RWHOST);

module.exports = {
    psqlClient
};