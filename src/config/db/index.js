const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/cycle_repair_web');
    } catch (error) {
        console.log('Connect Fail');
        console.log(error);
    }
}

module.exports = {
    connect
}