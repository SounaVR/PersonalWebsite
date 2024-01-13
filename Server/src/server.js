// Imports
require('dotenv').config();
const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const cors = require('cors');

// App
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Serve static files from the Vite build
app.use(express.static(path.join(__dirname, '../../Client/dist')));

// Nodemailer setup
const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Endpoint to send an email
app.post('/api/send-email', (req, res) => {
    const { to, subject, text } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) return res.status(500).send(err.toString());
        res.status(200).send('Email sent: ' + info.response);
    });
});

// Serve the landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../Client/dist', 'index.html'));
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});