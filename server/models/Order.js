const mongoose = require('mongoose')
const { productSchema } = require('./Product')


const orderedProductSchema = new mongoose.Schema({
	...productSchema.obj,
	quantity: { type: Number, default: 1 }
}, { _id: false })

const orderSchema = mongoose.Schema({
	customerEmail: { type: String, required: true },
	customerPhone: { type: Number, required: true },
	products: [orderedProductSchema],
	cost: { type: Number, required: true },
	date: { type: Date, default: Date.now() },
})

module.exports = mongoose.model('Order', orderSchema)