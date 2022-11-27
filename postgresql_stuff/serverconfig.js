const { Client } = require('pg');

const psqlClient = new Client({
    host: "localhost",
    user: "emailAPIUser",
    port: 5432,
    password: "tonyromo",
    database: "b64_psql"
});

psqlClient.connect();

module.exports = {
    psqlClient
};