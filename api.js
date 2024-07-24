const dbConnect = require('./mongodb');
const express = require('express');
const mongodb = require('mongodb');
const app = express();

app.use(express.json());//for getting the request body

app.get('/', async (req, resp) => {
    let db = await dbConnect();
    let result = await db.find().toArray();
    resp.send(result);
});

app.post('/', async (req, resp) => {
    let db = await dbConnect();
    let result = await db.insertOne(req.body);
    resp.send(result);
});

app.put('/', async (req, resp) => {
    let db = await dbConnect();
    let result = await db.updateOne(
        { name:req.body.name }, 
        { $set : req.body }
    );
    resp.send(result);
});

app.delete('/', async (req, resp) => {
    let db = await dbConnect();
    // console.log(req.body._id);
    let result = await db.deleteOne({_id: new mongodb.ObjectId(req.body.id)});
    resp.send(result);
});

app.listen('5000');