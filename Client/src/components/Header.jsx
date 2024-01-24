import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTranslation } from 'react-i18next';

import '../css/Navbar.css';

const Header = () => {
    const { i18n, t } = useTranslation();
    const { authData, logout } = useAuth();
    const [showDropdown, setShowDropdown] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setShowDropdown(false);
    };

    return (
        <nav className='navbar'>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/projects">{t('projectsTab')}</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className='form'>
                <div className="language-switcher" onClick={() => setShowDropdown(!showDropdown)}>
                    🌍
                    {showDropdown && (
                        <div className="language-dropdown">
                            <p onClick={() => changeLanguage('en')}>English</p>
                            <p onClick={() => changeLanguage('fr')}>Français</p>
                        </div>
                    )}
                </div>
                {authData.token ? (
                    <>
                        {authData.role ? (
                            <Link to="/admin/dashboard">
                                <button>Admin</button>
                            </Link>
                        ) : (<></>)}
                        <a><button onClick={logout}>{t('logout')}</button></a>
                    </>
                ) : (
                    <>
                        <Link to="/login">
                            <button>{t('login')}</button>
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Header;