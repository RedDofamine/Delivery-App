const fs = require('fs')
const path = require('path')

async function get(req, res) {
	try {
		const fileName = req.params.id
		if (!fileName) {
			res.status(404).json({ message: 'nothing to fetch' })
		}
		const filePath = path.join(process.cwd(), 'images', fileName)
		if (!fs.existsSync(filePath)) {
			res.status(404).json({ message: 'file not founded' })
		}
		res.sendFile(filePath)
	} catch (err) {
		res.status(500).json({ error: err.message })
	}
}

module.exports = { get }