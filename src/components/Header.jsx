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

    return (
        <header>
            <div id="header" style={{ display: isSidebarOpen ? 'none' : 'flex' }}>
                <a onClick={toggleSidebar}><i className="fa-solid fa-bars"></i></a>
            </div>
            <div id="hidden" style={{ display: isSidebarOpen ? 'flex' : 'none' }}>
                <a id="closecross" onClick={toggleSidebar}><i className="fa-duotone fa-solid fa-xmark"></i></a>
                <Link to="/home">Accueil</Link> {/* Remplacer href par Link */}
                <Link to="/works">Travaux</Link> {/* Remplacer href par Link */}
                <Link to="/about">À propos</Link> {/* Remplacer href par Link */}
                <Link to="/experiences">Expérience</Link> {/* Remplacer href par Link */}
                <Link to="/documents">Documents</Link> {/* Remplacer href par Link */}
                <Link to="/skills">Compétences</Link> {/* Remplacer href par Link */}
            </div>
        </header>
    );
};

export default Header;
