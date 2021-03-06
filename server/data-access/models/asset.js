const mongoose = require('../mongose');
const SUPPORTED_CRYPTOCURRENCIES = require('../../cryptocurrency-clients').SUPPORTED_CRYPTOCURRENCIES;

const assetSchema = new mongoose.Schema({
  __v: { type: Number, select: false },
  cryptocurrency: { type: String, enum: SUPPORTED_CRYPTOCURRENCIES, required: true },
  quantity: { type: Number, required: true, min: 0 },
  lastUpdate: { type: String, required: true },
  purchaseCost: { type: Number, required: true, min: 0 },
});

const Asset = mongoose.model('assets', assetSchema);

module.exports = { Asset, assetSchema };
