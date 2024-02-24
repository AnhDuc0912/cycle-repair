const mongoose = require('mongoose')

async function connect(connectString) {
    try {
        await mongoose.connect(connectString);

    } catch (error) {
        console.log('Connect Fail');
        console.log(error);
    }
}

module.exports = {
    connect
}