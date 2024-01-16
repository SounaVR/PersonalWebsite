import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-toastify';

const RegisterForm = () => {
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegister = async () => {
        try {
            const response = await fetch('https://localhost:5000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: formData.username, password: formData.password })
            });

            if (response.ok) {
                const { token } = await response.json();
                
                login(token);
                window.location.href = '/';
                toast.success('Reagistration successful!');
            } else {
                console.error('Register failed');
            }
        } catch (err) {
            console.error('Error register:', err);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form>
                <label htmlFor='username'>Username</label>
                <input
                    type='text'
                    id='username'
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                    required
                />

                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <button type='button' onClick={handleRegister}>Register</button>
                <div>
                    <p>Already got an account ? Consider <Link to="/login">login</Link> !</p>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;