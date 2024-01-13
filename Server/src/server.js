const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the Vite build
app.use(express.static(path.join(__dirname, '../../Client/dist')));

// Serve the landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../Client/dist', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});