const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// servir archivos subidos
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/upload', require('./routes/upload'));

module.exports = app;
