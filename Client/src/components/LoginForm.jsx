import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const LoginForm = () => {
    const { t } = useTranslation();
    useEffect(() => {
        document.title = "Login";
    }, []);

    const { login } = useAuth();
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
            const response = await fetch('https://souna.lexod.fr/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: formData.username, password: formData.password })
            });

            if (response.ok) {
                const { token } = await response.json();

                login(token);
                toast.success('Login successful!');
                setTimeout(() => {
                    window.location.href = '/';
                }, 2000);
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
            <h2>{t('login')}</h2>
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

                <label htmlFor='password'>{t('password')}</label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <button type='button' onClick={handleLogin}>{t('login')}</button>
                <div>
                    <p>{t('loginBottomText')} <Link to="/register">register</Link> !</p>
                    <p style={{fontStyle: 'italic'}}>{t('loginBottomTextPS')}</p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;