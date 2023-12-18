const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://dg1710dfkgard:41UL686Nu6WFeenu@cluster0.fhxpvhb.mongodb.net/cycle_repair_web');

    } catch (error) {
        console.log('Connect Fail');
        console.log(error);
    }
}

module.exports = {
    connect
}