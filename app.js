const express = require('express');
const recommendationRoutes = require('./routes/recommendations');
require('dotenv').config(); 
const DBconnection=require('./config/DBconnect');

const app = express();
DBconnection();//DB connection
app.use(express.json());  // Parse JSON requests

app.use('/api', recommendationRoutes);  // Use the recommendations route

const port = process.env.PORT || 3000;

app.listen(process.env.port,()=>{
    console.log(`The app is running at port ${process.env.port}`);
})