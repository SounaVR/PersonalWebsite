import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx';
import { ToastContainer } from 'react-toastify';
import { I18nextProvider } from 'react-i18next';
import i18n from './assets/i18n.js';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <AuthProvider>
                <App />
                <ToastContainer />
            </AuthProvider>
        </I18nextProvider>
    </React.StrictMode>
)