const express = require('express');
const router = express.Router();
const tradeController = require('../controllers/tradeController');

router.post('/', (req, res, next) => {
  console.log('Received POST request to /api/trades');
  console.log('Request body:', req.body);
  tradeController.createTrade(req, res, next);
});

router.get('/:id', (req, res, next) => {
  console.log('Received GET request to /api/trades/:id');
  console.log('Trade ID:', req.params.id);
  tradeController.getTrade(req, res, next);
});

module.exports = router;