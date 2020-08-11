const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.json({ msg: 'welcome action messages' }))

module.exports = router
