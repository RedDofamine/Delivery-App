const Customer = require('../models/Customer')
const Order = require('../models/Order')
const Coupon = require('../models/Coupon')

async function create(req, res) {
	try {
		const { products, customer, couponCode } = req.body
		if (!products) {
			res.status(404).json({ message: 'products must be included' })
		}
		let productsPrice = products.reduce((sum, product) => sum + product.price * product.quantity, 0).toFixed(2)

		if (!customer) {
			res.status(404).json({ message: 'customer data must be included' })
		}
		if (couponCode) {
			const coupon = await Coupon.findOne({ code: couponCode })
			productsPrice - coupon.cost < 0 ? productsPrice = 0 : productsPrice - coupon.cost
		}
		let customerData = await Customer.findOne({ email: customer.email, phone: customer.phone })
		if (!customerData) {
			customerData = await Customer.create(customer)
		}
		const order = await Order.create({ customerEmail: customer.email, customerPhone: customer.phone, products: products, cost: productsPrice })
		if (!order) {
			res.status(500).json({ message: 'Order was not created' })
		}
		res.status(201).json(order)
	} catch (err) {
		res.status(500).json({ error: err.message })
	}
}

async function get(req, res) {
	try {
		const { email, phone, _id } = req.body;
		let conditions = {};
		if (email) {
			conditions.customerEmail = email;
		}
		if (phone) {
			conditions.customerPhone = phone;
		}
		if (_id) {
			conditions._id = _id;
		}

		const orders = await Order.find(conditions);

		if (!orders) {
			res.status(404).json({ message: 'Orders not exists' })
		}
		res.status(200).json(orders)
	} catch (err) {
		res.status(500).json({ error: err.message })
	}
}

module.exports = { create, get }