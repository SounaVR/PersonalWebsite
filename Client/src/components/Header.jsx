import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Navbar.css';

const Header = () => {
    return (
        <nav className='navbar'>
            <div className='logo'>
                <Link to="/">Logo</Link>
            </div>
            <div className="nav-links">
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
};

export default Header;