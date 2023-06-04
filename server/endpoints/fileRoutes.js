const express = require('express')
const router = express.Router()

const FileController = require('../controllers/FileController')

router.get('/file/:id', (req, res) => FileController.get(req, res))

module.exports = router