const mongoose = require('mongoose');

const CargoSchema = new mongoose.Schema({
  tradeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trade', required: true },
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  status: { type: String, enum: ['in-transit', 'delivered', 'delayed'], default: 'in-transit' },
  estimatedDelivery: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Cargo', CargoSchema);