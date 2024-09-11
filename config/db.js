const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/service_providers", {

        });
        console.log(`MongoDB is connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(`Error: ${err.message}`);
    }
};

module.exports = connectDB;