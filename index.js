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


// configure Database
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.odfms.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run(){
    try{
        await client.connect();
        console.log("Connecting to Database");

        const database = client.db("cameras");
        const cameraCollection = database.collection("camera-collection");
        const orderCollection = database.collection('orders');

        // get api
        app.get('/products',async(req,res)=>{
            const cursor = cameraCollection.find({}); //for getting all data
            const result = await cursor.toArray();
            res.json(result);
        })

        //get all order api
        app.get('/orders',async(req,res)=>{
            const email = req.query.email;
            const query = {email:email}
            console.log(query);
            const cursor = orderCollection.find(query); //for getting all data
            const result = await cursor.toArray();
            res.json(result);
        })

        // get  service
        app.get('/users/:email', async (req, res) => {
            const email = req.params.email;
            const query = { email: email };
            const user = await usersCollection.findOne(query);
            let isAdmin = false;
            if (user?.role === 'admin') {
                isAdmin = true;
            }
            res.json({ admin: isAdmin });
        })
       
        // post api
        app.post('/products',async(req,res) =>{
            const doc = req.body;
            const result = await cameraCollection.insertOne(doc);
            console.log("posted", result);
            res.json(result);
        });
        // order api
        app.post('/orders',async(req,res)=>{
            const doc = req.body;
            const result = await orderCollection.insertOne(doc);
            console.log("order hitted");
            console.log(result);
            res.json(result);
        })
        // get manage api
        app.get('/manageOrder',async(req,res)=>{
            const cursor = orderCollection.find({}); //for getting all data
            const result = await cursor.toArray();
            res.json(result);
        })

         //order delete api
         app.delete('/myOrder/:id',async (req,res)=>{
            const id = req.params.id;
            console.log(id);
            const query = {id:ObjectId(id)
            };
            const result = await orderCollection.deleteOne(query);
            console.log(result);
            res.json(result);
        })

        // order get
        app.get('/myOrder/:email', async(req,res)=>{
            console.log(req.params.email);
            const email = req.params.email;
            
            const result = await orderCollection.find({email}).toArray();
            console.log(result);
            res.json(result);
        })
    }

    finally{
        // await client.close();
    }
}

run().catch(console.dir());



app.listen(port,()=>{
    console.log("Listening from port: ",port);
})
