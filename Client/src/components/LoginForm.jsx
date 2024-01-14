import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('https://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({ username: formData.username, password: formData.password })
            });

            if (response.ok) {
                const { token } = await response.json();

                document.cookie = `token=${token}; path=/; secure; HttpOnly`;
                window.location.href = '/';
            } else {
                setError('Invalid credentials !');
            }
        } catch (err) {
            console.error('Error logging in:', err);
            setError('Error logging in');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p className='error'>{error}</p>}
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

                <button type='button' onClick={handleLogin}>Login</button>
                <div>
                    <p>No account ? Consider <Link to="/register">register</Link> !</p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;