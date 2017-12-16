const router = require('express').Router()

router.get('/', User.findAll)

module.exports = router;
