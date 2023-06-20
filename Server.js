const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from config file
dotenv.config({path:"config/config.env"});

// Connect to the database
const db = require('./config/database');

const app = express();

// Parse JSON request bodies
app.use(express.json());

// Import routes
const item = require("./Routes/itemRoute");
const user = require("./Routes/userRoute");

// Mount routes
app.use('/api',item);
app.use('/api',user);

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
});
