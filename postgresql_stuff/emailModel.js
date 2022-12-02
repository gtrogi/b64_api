const { psqlClient } = require('./serverconfig');

// function getAll() {
//     return new Promise((resolve, reject) => {
//         psqlClient.query('SELECT * FROM emails', (err, res) => {
//             if(!err){
//                 resolve(res.rows);
//             } else {
//                 reject(err.message);
//             }
//         })
//     })
// };

// function getSingle(id) {
//     return new Promise((resolve, reject) => {
//         const qstring = 'SELECT * FROM emails WHERE id = $1';
//         const qvalues = [id];
//         psqlClient.query(qstring, qvalues, (err, res) => {
//             if(!err){
//                 if(res.rowCount) {
//                     resolve(res.rows);
//                 } else {
//                     resolve({ message: 'Record Not Found'});
//                 }
//             } else {
//                 reject(err.message);
//             }
//         })
//     })
// };

function addSingle(newData) {
    return new Promise((resolve, reject) => {
        const qstring = 'INSERT INTO emails (firstname, email) VALUES ($1, $2)';
        const qvalues = [newData['firstname'], newData['email']];

        psqlClient.query(qstring, qvalues, (err, res) => {
            if(!err){
                resolve(newData);
            } else {
                reject(err.code);
            }
        })
    })
};

module.exports = {
    // getAll,
    // getSingle,
    addSingle
};