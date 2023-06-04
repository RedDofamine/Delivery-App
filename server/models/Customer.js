const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
	name: { type: String, required: true },
	address: { type: String, required: true },
	email: { type: String, required: true },
	phone: { type: Number, required: true },
})

module.exports = mongoose.model('Customer', customerSchema);