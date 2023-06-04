const { Product } = require('../models/Product')

async function get(req, res) {
	try {
		const { shopTitle } = req.body;
		let products;
		if (!shopTitle) {
			products = await Product.find();
		} else {
			products = await Product.find({ shopTitle })
		}
		if (!products) {
			res.status(404).json({ message: 'products not finded' })
		}
		res.status(200).json(products);
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

module.exports = { get }