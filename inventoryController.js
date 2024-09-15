const Inventory = require('../models/Inventory');

exports.getInventory = async (req, res) => {
  try {
    const inventory = await Inventory.find({ stationId: req.params.stationId });
    res.json(inventory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};