import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import AdminDashboard from './components/AdminDashboard';
const Home = React.lazy(() => import('./components/Home'));

import './App.css';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/login" element={<LoginForm />}></Route>
                <Route path="/register" element={<RegisterForm />}></Route>
                <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
            </Routes>
        </Router>
    );
};

export default App;