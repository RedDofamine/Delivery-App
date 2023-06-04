const mongoose = require('mongoose')

const couponSchema = mongoose.Schema({
	title: { type: String, required: true },
	code: { type: Number, required: true, unique: true },
	cost: { type: Number, required: true },
})

module.exports = mongoose.model('Coupon', couponSchema)