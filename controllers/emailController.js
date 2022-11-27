const Email = require('../postgresql_stuff/emailModel');
const { getPostData } = require('./utils');

async function getEmails(req, res) {
    try {
        const emails = await Email.getAll();

        return JSON.stringify(emails);
    } catch (error) {
        console.log(error);
    }
};

async function getEmail(req, res, id) {
    try {
        const email = await Email.getSingle(id);

        return JSON.stringify(email);
    } catch (error) {
        console.log(error);
    }
};

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
        console.log(error);
    }
};

module.exports = {
    getEmails,
    getEmail,
    addEmail
};