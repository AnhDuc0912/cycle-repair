const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/education_dev');
    } catch (error) {
        console.log('Connect Fail');
        console.log(error);
    }
}

module.exports = {
    connect
}