import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Works from './pages/Works';
import About from './pages/About';
import Experiences from './pages/Experiences';
import Documents from './pages/Documents';
import Skills from './pages/Skills';
import VeilleUn from './pages/VeilleUn';


const Routers = () => {
    return (
        
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/about" element={<About />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/skills" element={<Skills />} />
            <Route path='/veilleun' element={<VeilleUn />} />
        </Routes>
    );
};

export default Routers;
