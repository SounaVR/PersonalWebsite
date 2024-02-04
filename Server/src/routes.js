// Imports
require('dotenv').config({ path: "../.env" });
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const User = require('../models/User');

const router = express.Router();

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
    }
});

// Endpoint to send an email
router.post('/send-email', (req, res) => {
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

// User registration
router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({ username, password: hashedPassword });

        const newUser = await user.save();
        const token = jwt.sign({ userName: user.username, id: user._id, role: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: "2h" });

        res.status(201).json({ result: newUser, token: token });
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).send('Error registering user');
    }
});

// User login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).send('Invalid credentials');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).send('Invalid credentials');
        }

        const token = jwt.sign({ userName: user.username, id: user._id, role: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: "2h" });

        res.json({ result: user, token: token });
    } catch (err) {
        console.error('Error logging in:', err);
        res.status(500).send('Error logging in');
    }
});

router.get('/verify-token', (req, res) => {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        res.json({ role: decodedToken.role });
    } catch (err) {
        res.status(401).json({ error: 'Invalid token' });
    }
});

module.exports = router;