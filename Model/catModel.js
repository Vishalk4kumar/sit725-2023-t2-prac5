const client = require('../DBConnection');
const collection = client.db().collection('Cat');

const postCat = (cat, callback) => {
    collection.insertOne(cat, callback);
};

const getAllCats = (callback) => {
    collection.find({}).toArray(callback);
};

module.exports = { postCat, getAllCats };