const express = require("express");
const {
    getProviders,
    getProviderById,
    addProvider,
    updateProvider,
    deleteProvider,
} = require("../controllers/providerController");
const router = express.Router();
router.get('/', getProviders);
router.get('/:id', getProviderById);
router.post('/', addProvider);
router.put('/:id', updateProvider);
router.delete('/:id', deleteProvider);
module.exports = router;