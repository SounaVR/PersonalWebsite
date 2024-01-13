import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/projects" element={<Projects />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </Router>
    );
};

export default App;