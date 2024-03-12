const mongoose = require('mongoose')

async function connect(connectString) {
    try {
        await mongoose.connect(connectString);
        console.log('Connect Success');
    } catch (error) {
        console.log('Connect Fail');
        console.log(error);
    }
}

module.exports = {
    connect
}