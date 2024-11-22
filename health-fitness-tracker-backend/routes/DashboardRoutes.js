const express = require('express');
const router = express.Router();
const { getDashboardData } = require('../controllers/DashboardController');
const authenticateToken = require('../middlewares/AuthMiddleware');

// Dashboard route (protected)
router.get('/', authenticateToken, getDashboardData);

module.exports = router;
