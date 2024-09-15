const Cargo = require('../models/Cargo');

exports.createCargo = async (req, res) => {
  try {
    const { tradeId, origin, destination, estimatedDelivery } = req.body;
    const cargo = new Cargo({ tradeId, origin, destination, estimatedDelivery });
    await cargo.save();
    res.status(201).json(cargo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getCargo = async (req, res) => {
  try {
    const cargo = await Cargo.findById(req.params.id);
    if (!cargo) return res.status(404).json({ message: 'Cargo not found' });
    res.json(cargo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};