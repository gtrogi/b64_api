const Email = require('../postgresql_stuff/emailModel.js');
const { getPostData } = require('./utils');

async function addEmail(req, res) {
    try {
        const body = await getPostData(req);
        const { firstname, email } = JSON.parse(body);

        var newInput = {
            firstname,
            email
        };

        const newOutput = await Email.addSingle(newInput);

        return JSON.stringify(newOutput);

    } catch (error) {
        console.log(error.message);

        if(error.code == 23505) { 
            //unique violation - update the name instead of adding a new record
            const newOutput = await Email.updateSingle(newInput);
            return JSON.stringify(newOutput);
        }

        return 0;
    }
};

module.exports = {
    addEmail
};