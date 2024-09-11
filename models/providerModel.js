const mongoose = require("mongoose");

const providerSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    plan: {
        type: String,
        required: true,
    },
    validity: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
});

const Provider = mongoose.model("Provider", providerSchema);

module.exports = Provider;
