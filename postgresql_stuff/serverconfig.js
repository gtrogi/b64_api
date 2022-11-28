const { prototype } = require('cyclic-dynamodb/src/cy_db_index');
const { Client } = require('pg');

const psqlClient = new Client({

    host: "containers-us-west-76.railway.app",
    user: "postgres",
    port: 7303,
    password: "JVmK21W60CThORZ6BGEQ", 
    database: "railway"

    // host: "localhost",
    // user: "emailAPIUser",
    // port: 5432,
    // password: "tonyromo",
    // database: "b64_psql"
});

psqlClient.connect();

module.exports = {
    psqlClient
};