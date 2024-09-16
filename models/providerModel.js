const mongoose = require("mongoose");

const providerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true, // Ensure names are unique
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
        min: 0,
        max: 5,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    }
}, {
    timestamps: true
});


providerSchema.index({ rating: -1 });
providerSchema.index({ price: 1 });

const Provider = mongoose.model("Provider", providerSchema);

module.exports = Provider;
