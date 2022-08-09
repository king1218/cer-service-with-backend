const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT||5000;
const { MongoClient, ServerApiVersion } = require('mongodb');
app.use(cors());
app.use(express.json());


//user: kingsayid1218
// password:3jaeIYoufVZWPeHq


const uri = "mongodb+srv://kingsayid1218:3jaeIYoufVZWPeHq@cluster0.rahsr.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run(){
    try {
          await client.connect();
          const UsersCollection = client.db("FoodDb").collection("users");
          const user = {name:'king',email:'kingsaydi1218@gmail.com'};
          const result = await UsersCollection.insertOne(user);
          console.log(`user inserted with id:${result.insertedId}`)
    }
    finally{
       // await client.close();
    }
}
run().catch(console.dir);
app.get('/',(req,res)=>{
    res.send('Running My Node Crud server');
})
app.listen(port,()=>{
    console.log('Cord ruinng');
}) 