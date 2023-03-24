const express = require('express');
const bookingController = require('../controllers/bookingController');

const router = express.Router();

router.route('/booking').post(bookingController.create);

module.exports = router;