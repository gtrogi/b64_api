const { psqlClient } = require('./serverconfig');
const PgError = require("pg-error");

function addSingle(newData) {
    return new Promise((resolve, reject) => {
        const qName = newData['firstname'];
        const qEmail = newData['email'];


        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(qEmail)) {
            const error = new PgError({
                message: "not a valid email",
                severity: "ERROR",
                code: "69420"
            })

            reject(error);
        }

        const qstring = 'INSERT INTO emails (firstname, email) VALUES ($1, $2)';

        psqlClient.query(qstring, [qName, qEmail], (err, res) => {
            if(!err){
                resolve(newData);
            } else {
                reject(err);
            }
        })
    })
};

module.exports = {
    addSingle
};