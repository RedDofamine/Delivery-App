const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
	shopTitle: { type: String, required: true },
	title: { type: String, required: true },
	price: { type: Number, required: true },
	description: String,
	image: String,
})

const Product = mongoose.model('Product', productSchema)

module.exports = { Product, productSchema }