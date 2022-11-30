const { prototype } = require('cyclic-dynamodb/src/cy_db_index');
const { Client } = require('pg');

const psqlClient = new Client({
    host: process.env.RWHOST,
    user: process.env.RWUSER,
    port: process.env.RWPORT,
    password: process.env.RWPASSWORD, 
    database: process.env.RWDATABASE
});

psqlClient.connect();

module.exports = {
    psqlClient
};