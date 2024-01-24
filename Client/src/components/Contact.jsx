import React, { useEffect, useState } from 'react';
import '../css/Contact.css';

const Contact = () => {
    useEffect(() => {
        document.title = "Contact";
    }, []);
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('https://localhost:5000/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    to: 'souna@duck.com',
                    subject: 'New Contact Form Submission',
                    text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
                })
            });

            if (response.ok) console.log('Email sent successfully!');
            else console.error('Failed to send email.');
        } catch (err) {
            console.error('Error sending email:', err);
        }
    };
    
    return (
        <div>
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Full Name</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor='email'>Your Mail</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor='message'>Message</label>
                <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                />

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Contact;