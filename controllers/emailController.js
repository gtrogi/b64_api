const Email = require('../postgresql_stuff/emailModel.js');
const { getPostData } = require('./utils');

async function addEmail(req, res) {
    try {
        const body = await getPostData(req);
        const { firstname, email } = JSON.parse(body);

        const newInput = {
            firstname,
            email
        };

        const newOutput = await Email.addSingle(newInput);


        return JSON.stringify(newOutput);

    } catch (error) {
        console.log(error.message);

        if(error.code == 23505) { //unique violation - don't worry about it
            return JSON.stringify({ message: 'email already registered' });
        }

        return 0;
    }
};

module.exports = {
    addEmail
};