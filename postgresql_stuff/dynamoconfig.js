const CyclicDb = require("cyclic-dynamodb");
const db = CyclicDb("glorious-ruby-goldfishCyclicDB");

const colEmails = db.collection("emails")

async function getAll() {
    let item = await colEmails.get("leo");
    console.log(item);
    return item;
};


async function addSingle(newData) {
    console.log(newData['firstname']);
    console.log(newData['email']);
    let item = await colEmails.set("leo", {
        firstname: newData['firstname'],
        color: newData['email']
    })    
    return item;
};

module.exports = {
    getAll,
    addSingle
};