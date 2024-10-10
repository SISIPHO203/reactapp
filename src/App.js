import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import UserProfile from './pages/UserProfile';
import { UserProvider } from './context/UserContext';
import './App.css';

function App() {
    return (
        <UserProvider>
            <Router>
                <Navbar />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/user" element={<UserProfile />} />
                    </Routes>
                </div>
            </Router>
        </UserProvider>
    );
}

export default App;
