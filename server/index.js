const config = require('./config/config')
const cors = require('cors')

const mongoose = require('mongoose')
const express = require('express')
const path = require('path')

const shopRoutes = require('./endpoints/shopRoutes')
const orderRoutes = require('./endpoints/orderRoutes')
const fileRoutes = require('./endpoints/fileRoutes')
const couponRoutes = require('./endpoints/couponRoutes')

const app = new express()

// app.use(express.static(path.join(__dirname, '/public')))

app.use(cors())
app.use(express.json())
app.use(shopRoutes)
app.use(orderRoutes)
app.use(fileRoutes)
app.use(couponRoutes)

async function dbConnect() {
	await mongoose.connect(config.db.token)
}
function start() {
	dbConnect()

	app.listen(config.server.port, () => console.log(`Server running on port ${config.server.port}`))
}
start()