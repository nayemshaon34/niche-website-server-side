const { MongoClient } = require('mongodb');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const ObjectId = require('mongodb').ObjectId;
var admin = require("firebase-admin");

const { application } = require('express');


const port = process.env.PORT || 4000;


// middleware
// 

var serviceAccount = require("./niche-website-firebase-adminsdk");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


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
        const reviewCollection = database.collection('review');
        const usersCollection = database.collection('users');

        app.get('/products',async(req,res)=>{
            const cursor = cameraCollection.find({}); //for getting all data
            const result = await cursor.toArray();
            res.json(result);
        })

        app.post('/products',async(req,res) =>{
            const doc = req.body;
            const result = await cameraCollection.insertOne(doc);
            console.log("posted", result);
            res.json(result);
        });

        //get specific order api
        app.get('/orders',async(req,res)=>{
            const email = req.query.email;
            const query = {email:email}
            console.log(query);
            const cursor = orderCollection.find(query); //for getting all data
            const result = await cursor.toArray();
            res.json(result);
        })


        app.post('/orders',async(req,res)=>{
            const doc = req.body;
            const result = await orderCollection.insertOne(doc);
            console.log("order hitted");
            console.log(result);
            res.json(result);
        })


        app.delete('orders/:id',async (req,res)=>{
            const id = req.params.id;
            console.log(id);
            const query = {id:ObjectId(id)
            };
            const result = await orderCollection.deleteOne(query);
            console.log(result);
            res.json(result);
        })




        /*  app.delete('/myOrder/:id',async (req,res)=>{
            const id = req.params.id;
            console.log(id);
            const query = {id:ObjectId(id)
            };
            const result = await orderCollection.deleteOne(query);
            console.log(result);
            res.json(result);
        }) */



        async function verifyToken(req, res, next) {
            if (req.headers?.authorization?.startsWith('Bearer ')) {
                const token = req.headers.authorization.split(' ')[1];
        
                try {
                    const decodedUser = await admin.auth().verifyIdToken(token);
                    req.decodedEmail = decodedUser.email;
                }
                catch {
        
                }
        
            }
            next();
        }
        

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
       
        app.post('/users', async (req, res) => {
            const user = req.body;
            const result = await usersCollection.insertOne(user);
            console.log(result);
            res.json(result);
        });

        app.put('/users/admin', verifyToken, async (req, res) => {
            const user = req.body;
            const requester = req.decodedEmail;
            if (requester) {
                const requesterAccount = await usersCollection.findOne({ email: requester });
                if (requesterAccount.role === 'admin') {
                    const filter = { email: user.email };
                    const updateDoc = { $set: { role: 'admin' } };
                    const result = await usersCollection.updateOne(filter, updateDoc);
                    res.json(result);
                }
            }
            else {
                res.status(403).json({ message: 'you do not have access to make admin' })
            }

        })

        app.post('/review',async(req,res)=>{
            const doc = req.body;
            const result = await reviewCollection.insertOne(doc);
            console.log("review hitted");
            console.log(result);
            res.json(result);
        })


        app.get('/review',async(req,res)=>{
            const cursor = reviewCollection.find({}); //for getting all data
            const result = await cursor.toArray();
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
