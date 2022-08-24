const express = require('express')
const mongodb = require('mongodb')
const { connect, disconnect } = require('../api/db.config');
const router = express.Router();


// Get TimeStamps
router.get('/', async (req, res) => {
    const timeStamps = await loadTimeStampCollection();
    res.send(await timeStamps.find({}).toArray());
});


// Add TimeStamp
router.post('/', async (req,res) => {
    const timeStamps = await loadTimeStampCollection();
    await timeStamps.insertOne({
        text: req.body.text,
        createdAt: new Date().toLocaleDateString('de') + " - " + new Date().toLocaleTimeString('de', {timeStyle: 'short'})
    });
    res.status(201).send();
});


// Delete TimeStamp
router.delete('/:id', async (req, res) => {
    const timeStamps = await loadTimeStampCollection();
    await timeStamps.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    res.status(200).send();
})

async function loadTimeStampCollection(){
    const client = await mongodb.MongoClient.connect('mongodb://admin:admin_password@localhost:27017/', { useNewUrlParser: true});

    return client.db('strandgarten-employee-planning').collection('timeStamps');
}


module.exports = router;