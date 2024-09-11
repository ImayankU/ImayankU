const mongoose = require("mongoose");
const Provider = require("../models/providerModel");

// Helper function to validate ObjectId
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id) && /^[a-fA-F0-9]{24}$/.test(id);

// Get all providers
const getProviders = async (req, res) => {
    try {
        const providers = await Provider.find();
        res.json(providers);
    } catch (err) {
        console.error(`Error fetching providers: ${err.message}`);
        res.status(500).send("Internal server error");
    }
};

// Get provider by ID
const getProviderById = async (req, res) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        return res.status(400).send("Invalid ID format");
    }

    try {
        const provider = await Provider.findById(id);
        if (provider) {
            res.json(provider);
        } else {
            res.status(404).send("Provider not found");
        }
    } catch (err) {
        console.error(`Error fetching provider by ID: ${err.message}`);
        res.status(500).send("Internal server error");
    }
};

// Add a new provider
const addProvider = async (req, res) => {
    try {
        const newProvider = new Provider(req.body);
        await newProvider.save();
        res.status(201).json(newProvider);
    } catch (err) {
        console.error(`Error adding provider: ${err.message}`);
        res.status(500).send("Internal server error");
    }
};

// Update provider by ID
const updateProvider = async (req, res) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        return res.status(400).send("Invalid ID format");
    }

    try {
        const updatedProvider = await Provider.findByIdAndUpdate(id, req.body, { new: true });
        if (updatedProvider) {
            res.json(updatedProvider);
        } else {
            res.status(404).send("Provider not found");
        }
    } catch (err) {
        console.error(`Error updating provider: ${err.message}`);
        res.status(500).send("Internal server error");
    }
};

// Delete provider by ID
const deleteProvider = async (req, res) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        return res.status(400).send("Invalid ID format");
    }

    try {
        const deletedProvider = await Provider.findByIdAndDelete(id);
        if (deletedProvider) {
            res.status(204).send(); // No content to send back
        } else {
            res.status(404).send("Provider not found");
        }
    } catch (err) {
        console.error(`Error deleting provider: ${err.message}`);
        res.status(500).send("Internal server error");
    }
};

module.exports = {
    getProviders,
    getProviderById,
    addProvider,
    updateProvider,
    deleteProvider,
};
