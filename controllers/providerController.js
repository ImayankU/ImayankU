const mongoose = require('mongoose');
const Provider = require('../models/providerModel');


const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

const getProvider = async (req, res) => {
    try {
        const providers = await Provider.find();
        res.json(providers);
    } catch (err) {
        console.log(`Error in getProvider: ${err.message}`);
        res.status(500).send('Internal server error');
    }
};

const getProviderById = async (req, res) => {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
        return res.status(400).send('Invalid ID');
    }
    try {
        const provider = await Provider.findById(id);
        if (provider) {
            res.json(provider);
        } else {
            res.status(404).send('Provider not found');
        }
    } catch (err) {
        console.error(`Error in getProviderById: ${err.message}`);
        res.status(500).send('Internal server error');
    }
};

const addProviders = async (req, res) => {
    try {
        const newProvider = new Provider(req.body);
        const savedProvider = await newProvider.save();
        res.status(201).json(savedProvider);
    } catch (err) {
        console.error(`Error in addProviders: ${err.message}`);
        res.status(500).send('Internal server error');
    }
};

const updateProvider = async (req, res) => {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
        return res.status(400).send('Invalid ID');
    }
    try {
        const updatedProvider = await Provider.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (updatedProvider) {
            res.json(updatedProvider);
        } else {
            res.status(404).send('Provider not found');
        }
    } catch (err) {
        console.error(`Error in updateProvider: ${err.message}`);
        res.status(500).send('Internal server error');
    }
};

const deleteProvider = async (req, res) => {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
        return res.status(400).send('Invalid ID');
    }
    try {
        const deletedProvider = await Provider.findByIdAndDelete(id);
        if (deletedProvider) {
            res.status(200).send('Provider deleted successfully');
        } else {
            res.status(404).send('Provider not found');
        }
    } catch (err) {
        console.error(`Error in deleteProvider: ${err.message}`);
        res.status(500).send('Internal server error');
    }
};

module.exports = {
    getProvider,
    getProviderById,
    addProviders,
    updateProvider,
    deleteProvider
};
