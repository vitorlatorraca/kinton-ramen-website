
// File: backend/src/index.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const ramenRoutes = require('./routes/ramenRoutes');
const { errorHandler } = require('./middleware/errorHandler');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/api/ramens', ramenRoutes);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
