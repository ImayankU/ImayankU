const express = require('express');
const router = express.Router();
const providerController = require('../controllers/providerController');


router.get('/', providerController.getProvider);

router.get('/:id', providerController.getProviderById);

router.post('/', providerController.addProviders);

router.put('/:id', providerController.updateProvider);

router.delete('/:id', providerController.deleteProvider);

module.exports = router;
