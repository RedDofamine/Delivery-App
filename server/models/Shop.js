const mongoose = require('mongoose')

const shopSchema = mongoose.Schema({
	title: { type: String, required: true, unique: true },
	address: [{ type: String, required: true }],
})

module.exports = mongoose.model('Shop', shopSchema)