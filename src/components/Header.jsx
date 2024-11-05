import React, { useState, useEffect } from 'react';

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
                <a href="/home">Accueil</a>
                <a href="/works">Travaux</a>
                <a href="/about">À propos</a>
                <a href="/experiences">Expérience</a>
                <a href="/documents">Documents</a>
                <a href="/skills">Compétences</a>
            </div>
        </header>
    );
};

export default Header;
