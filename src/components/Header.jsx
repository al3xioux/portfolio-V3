import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importation de Link

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('no-scroll', isSidebarOpen);
    }, [isSidebarOpen]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <header>
            <div id="header" style={{ display: isSidebarOpen ? 'none' : 'flex' }}>
                <a onClick={toggleSidebar}><i className="fa-solid fa-bars"></i></a>
            </div>
            <div id="hidden" style={{ display: isSidebarOpen ? 'flex' : 'none' }}>
                <a id="closecross" onClick={toggleSidebar}><i className="fa-duotone fa-solid fa-xmark"></i></a>
                <Link to="/home" onClick={closeSidebar}>Accueil</Link> 
                <Link to="/works" onClick={closeSidebar}>Travaux</Link> 
                <Link to="/about" onClick={closeSidebar}>À propos</Link> 
                <Link to="/experiences" onClick={closeSidebar}>Expérience</Link> 
                <Link to="/documents" onClick={closeSidebar}>Documents</Link> 
                <Link to="/skills" onClick={closeSidebar}>Compétences</Link> 
            </div>
        </header>
    );
};

export default Header;
