const { MongoClient } = require('mongodb');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const ObjectId = require('mongodb').ObjectId;
const { application } = require('express');


const port = process.env.PORT || 4000;


// middleware
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello from server")
});

app.listen(port,()=>{
    console.log("Listening from port: ",port);
})
