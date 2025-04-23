// File: backend/src/models/Ramen.js
const mongoose = require('mongoose');

const RamenSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  imageUrl: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Ramen', RamenSchema);
