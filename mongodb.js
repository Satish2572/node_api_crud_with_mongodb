const { MongoClient } = require('mongodb');
const url = "mongodb://0.0.0.0:27017";
const dataBaseName = "e-commerce";
const client = new MongoClient(url);

async function dbConnect(){
    let result = await client.connect();
    db = result.db(dataBaseName);
    return db.collection('users');
}

module.exports = dbConnect;