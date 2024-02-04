// Imports
require('dotenv').config({ path: "../.env" });
const http = require('http');
const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

// App
const app = express();

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
http.createServer(app).listen(process.env.PORT, () => {
    console.log(`Server is running.`);
});