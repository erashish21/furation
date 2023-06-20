const express = require('express');
const dotenv = require('dotenv');


//Config
dotenv.config({path:"config/config.env"});
const db = require('./config/database');

const app = express();

app.use(express.json());


// Route imports
const item = require("./Routes/itemRoute");

app.use('/api',item);


// Run the server
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port: ${process.env.PORT}`);
});