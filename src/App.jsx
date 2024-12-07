import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import About from './pages/About';
import Market from './pages/Market';



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/farmer-home" element={<Home />} />
                <Route path="/farmer-about" element={<About />} />
                <Route path="/farmer-market" element={<Market />} />




            </Routes>
        </Router>
    );
}

export default App;
