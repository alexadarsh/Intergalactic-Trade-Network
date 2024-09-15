const Trade = require('../models/Trade');

exports.createTrade = async (req, res) => {
  try {
    const { sellerId, buyerId, itemId, quantity, price } = req.body;
    const trade = new Trade({ sellerId, buyerId, itemId, quantity, price });
    await trade.save();
    res.status(201).json(trade);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getTrade = async (req, res) => {
  try {
    const trade = await Trade.findById(req.params.id);
    if (!trade) return res.status(404).json({ message: 'Trade not found' });
    res.json(trade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};