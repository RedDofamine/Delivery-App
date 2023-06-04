const Coupon = require('../models/Coupon')

async function get(req, res) {
	try {
		const coupons = await Coupon.find()
		if (!coupons) {
			res.status(404).json({ message: 'coupons not finded' })
		}
		res.status(200).json(coupons);
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

module.exports = { get }