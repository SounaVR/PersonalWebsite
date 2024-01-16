import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import '../css/Navbar.css';

const Header = () => {
    const { authData, logout } = useAuth();
    const isAdmin = authData.role;

    return (
        <nav className='navbar'>
            <div className="nav-links">
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className='form'>
                {authData.token ? (
                    <>
                        {isAdmin ? (
                            <Link to="/admin/dashboard">
                                <button>Admin</button>
                            </Link>
                        ) : (<></>)}
                        <a><button onClick={logout}>Logout</button></a>
                    </>
                ) : (
                    <>
                        <Link to="/login">
                            <button>Login</button>
                        </Link>
                        <Link to="/register">
                            <button className='register-button'>Register</button>
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Header;