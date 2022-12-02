const { psqlClient } = require('./serverconfig');

function addSingle(newData) {
    return new Promise((resolve, reject) => {
        const qName = newData['firstname'];
        const qEmail = newData['email'];


        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(qEmail)) {
            reject("not a valid email");
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