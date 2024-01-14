import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Navbar.css';

const Header = () => {
    return (
        <nav className='navbar'>
            <div className="nav-links">
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className='form'>
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/register">
                    <button className='register-button'>Register</button>
                </Link>
            </div>
        </nav>
    );
};

export default Header;