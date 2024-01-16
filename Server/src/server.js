// Imports
require('dotenv').config();
const https = require('https');
const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

const options = {
    key: fs.readFileSync('./cert-keys/localhost-key.pem'),
    cert: fs.readFileSync('./cert-keys/localhost.pem')
};

// App
const app = express();
const server = https.createServer(options, app);
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use('/api', routes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_STRING);

// Serve static files from the Vite build
app.use(express.static(path.join(__dirname, '../../Client/dist')));

// Serve the landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../Client/dist', 'index.html'));
});

// Start the server
server.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});