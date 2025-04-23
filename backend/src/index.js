// File: backend/src/index.js

const path = require('path');
const fs = require('fs');
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const ramenRoutes = require('./routes/ramenRoutes');
const { errorHandler } = require('./middleware/errorHandler');

// força carregar o .env que está em backend/.env
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// DEBUG: informações de ambiente
console.log('• CWD             :', process.cwd());
console.log('• .env path       :', path.resolve(__dirname, '../.env'));
try {
  console.log('• .env contents   :\n' + fs.readFileSync(path.resolve(__dirname, '../.env'), 'utf8'));
} catch (err) {
  console.error('• não conseguiu ler .env:', err);
}
console.log('• process.env.URI :', process.env.MONGO_URI);

// conecta ao banco
connectDB();

const app = express();
app.use(express.json());
app.use('/api/ramens', ramenRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
