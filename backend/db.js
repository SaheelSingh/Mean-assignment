const mongoose = require('mongoose');

const dbConnent = () => {
    try {
        mongoose.connect('mongodb://root:secret@db:27017/assigment?authSource=admin', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database Connected Successfully...')
    } catch (error) {
        console.log('Failed to connect', error)
    }
}

module.exports = dbConnent;
