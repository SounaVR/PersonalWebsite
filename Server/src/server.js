// Imports
require('dotenv').config();
const { expressjwt: jwt } = require('express-jwt');
const https = require('https');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
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

app.use(cookieParser());
app.use(session({
    secret: process.env.JWT_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
    }
}));

// Middleware
app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:5000' }));
app.use('/api', routes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_STRING);

// Serve static files from the Vite build
app.use(express.static(path.join(__dirname, '../../Client/dist')));

// Serve the landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../Client/dist', 'index.html'));
});

// Protected route using JWT and additional check for admin access
app.get('/admin/dashboard', jwt({ secret: process.env.JWT_SECRET, algorithms: ['HS256'] }), (req, res) => {
    console.log('Request Headers:', req.headers);
    
    if (!req.user || !req.user.isAdmin) {
      return res.status(403).json({ error: 'Unauthorized' });
    }
  
    res.send('Welcome to the admin dashboard!');
});

// Start the server
server.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});