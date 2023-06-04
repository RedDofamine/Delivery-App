const express = require('express')
const router = express.Router()

const ShopController = require('../controllers/ShopController')

router.get('/shop', (req, res) => ShopController.get(req, res));

module.exports = router;