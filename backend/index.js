const express = require('express');
const dbConnent = require('./db');
const item = require('./models/item');
const cors = require('cors');
const records = require('./data/data');

const app = express();

app.use(cors())
app.use(express.json());
dbConnent();

// item.insertMany(records)

app.get('/test', (req, res) => {
    res.json('hello')
})

app.get('/', async (req, res) => {
    try {
        const allItems = await item.find()
        res.json(allItems)
    } catch (error) {
        res.status(400).json('somthing went wrong')
    }
})

app.get('/available', async (req, res) => {
    try {
        const getAvailable = await item.find({available: true})
        res.json(getAvailable)
    } catch (error) {
        res.status(400).json('somthing went wrong')
    }
})

app.get('/unavailable', async (req, res) => {
    try {
        const getAvailable = await item.find({available: false})
        res.json(getAvailable)
    } catch (error) {
        res.status(400).json('somthing went wrong')
    }
})

app.get('/item/:id', async (req, res) => {
    try {
        const id = req.params.id;
        if(!id) {
            res.json('not found')
        }
        const oldItem = await item.findById(id)
        res.json(oldItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.put('/item/:id', async (req, res) => {
    try {
        const id = req.params.id;
        if(!id) {
            res.json('not found')
        }
        const oldItem = await item.findById(id)

        oldItem.available = !oldItem.available;

        await oldItem.save();
        res.json(oldItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.put('/makeAllAvailable', async (req, res) => {
    try {
        const availAllItems = await item.updateMany({}, {$set: {available: true}})


        res.json(
            {
                message: "All item updated successfully",
                count: availAllItems.modifiedCount
            }
        )
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.put('/makeAllUnAvailable', async (req, res) => {
    try {
        const availAllItems = await item.updateMany({}, {$set: {available: false}})


        res.json(
            {
                message: "All item updated successfully",
                count: availAllItems.modifiedCount
            }
        )
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.listen(4000, () => {
    console.log("port 4000 listning")
})