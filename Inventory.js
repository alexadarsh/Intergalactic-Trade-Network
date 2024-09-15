const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
  stationId: { type: String, required: true },
  itemId: { type: String, required: true },
  quantity: { type: Number, required: true },
  lastUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Inventory', InventorySchema);