const { Client } = require('pg');

const psqlClient = new Client({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    port: process.env.PGPORT,
    password: process.env.PGPASSWORD, 
    database: process.env.PGDATABASE
});

psqlClient.connect(process.env.PGHOST);

module.exports = {
    psqlClient
};