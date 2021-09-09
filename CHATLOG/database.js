const mongodb = require("mongodb");
const MongoClient =  mongodb.MongoClient;

let db = null;

const mongoConnect = (callback) => {
    MongoClient.connect("mongodb://localhost:27017/chat")
.then(client => {

    db = client.db();
    callback()
})

}


const getDb = () => {
    return db;
}


module.exports = {
    mongoConnect,
    getDb
}