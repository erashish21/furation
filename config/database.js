const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error while connecting to db"));

db.once('open',function(){
    console.log("successfully connnect with db");
});

module.exports = db;
