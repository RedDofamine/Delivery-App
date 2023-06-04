const express = require('express')
const router = express.Router()

const OrderController = require('../controllers/OrderController')

router.get('/order', (req, res) => OrderController.get(req, res))
router.post('/order', (req, res) => OrderController.create(req, res))

module.exports = router