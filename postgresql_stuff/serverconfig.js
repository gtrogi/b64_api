const { prototype } = require('cyclic-dynamodb/src/cy_db_index');
const { Client } = require('pg');

const psqlClient = new Client({
    host: RWHOST,
    user: RWUSER,
    port: RWPORT,
    password: RWPASSWORD, 
    database: RWDATABASE
});

psqlClient.connect();

module.exports = {
    psqlClient
};