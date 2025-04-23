// File: backend/src/controllers/ramenController.js
const Ramen = require('../models/Ramen');

// @desc    Get all ramens
// @route   GET /api/ramens
// @access  Public
exports.getRamens = async (req, res, next) => {
  try {
    const ramens = await Ramen.find();
    res.json(ramens);
  } catch (err) {
    next(err);
  }
};

// @desc    Create new ramen
// @route   POST /api/ramens
// @access  Public
exports.createRamen = async (req, res, next) => {
  try {
    const newRamen = await Ramen.create(req.body);
    res.status(201).json(newRamen);
  } catch (err) {
    next(err);
  }
};

// @desc    Get ramen by ID
// @route   GET /api/ramens/:id
// @access  Public
exports.getRamenById = async (req, res, next) => {
  try {
    const ramen = await Ramen.findById(req.params.id);
    if (!ramen) return res.status(404).json({ message: 'Not found' });
    res.json(ramen);
  } catch (err) {
    next(err);
  }
};

// @desc    Update ramen
// @route   PUT /api/ramens/:id
// @access  Public
exports.updateRamen = async (req, res, next) => {
  try {
    const updated = await Ramen.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

// @desc    Delete ramen
// @route   DELETE /api/ramens/:id
// @access  Public
exports.deleteRamen = async (req, res, next) => {
  try {
    const deleted = await Ramen.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    next(err);
  }
};
