const express = require('express')
const router = express.Router()

const CouponController = require('../controllers/CouponController')

router.get('/coupons', (req, res) => CouponController.get(req, res))

module.exports = router