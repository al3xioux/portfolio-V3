import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Importation de Link

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
    const rafRef = useRef(null);

    useEffect(() => {
        document.body.classList.toggle('no-scroll', isSidebarOpen);
    }, [isSidebarOpen]);

    const toggleSidebar = () => {
        window.scrollTo(0, 0);
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const handleMouseMove = (e) => {
        // Le targetPos suit instantanément la position du curseur
        setTargetPos({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        if (isSidebarOpen) {
            // Fonction d'animation
            const animate = () => {
                // Interpolation : mousePos se rapproche progressivement de targetPos
                setMousePos(prevPos => {
                    const lerpFactor = 0.1; // Ajustez ce facteur pour plus ou moins de délai
                    const newX = prevPos.x + (targetPos.x - prevPos.x) * lerpFactor;
                    const newY = prevPos.y + (targetPos.y - prevPos.y) * lerpFactor;
                    return { x: newX, y: newY };
                });

                rafRef.current = requestAnimationFrame(animate);
            };

            // Démarre l'animation quand le sidebar est ouvert
            rafRef.current = requestAnimationFrame(animate);

            return () => {
                // Arrête l'animation quand on ferme le sidebar
                if (rafRef.current) cancelAnimationFrame(rafRef.current);
            };
        }
    }, [isSidebarOpen, targetPos]);

    return (
        <header>
            <div id="header" style={{ display: isSidebarOpen ? 'none' : 'flex' }}>
                <a onClick={toggleSidebar}><i className="fa-solid fa-bars"></i></a>
            </div>
            <div
                id="hidden"
                style={{
                    display: isSidebarOpen ? 'flex' : 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    width: '100%',
                    height: '100vh'
                }}
                onMouseMove={handleMouseMove}
            >
                <a id="closecross" onClick={toggleSidebar}><i className="fa-duotone fa-solid fa-xmark"></i></a>
                <Link to="/home" onClick={closeSidebar}>Accueil</Link>
                <Link to="/works" onClick={closeSidebar}>Travaux</Link>
                <Link to="/about" onClick={closeSidebar}>À propos</Link>
                <Link to="/experiences" onClick={closeSidebar}>Expérience</Link>
                <Link to="/documents" onClick={closeSidebar}>Documents</Link>
                <Link to="/skills" onClick={closeSidebar}>Compétences</Link>

                {/* Point blanc qui suit la souris avec un retard (lerp) */}
                {isSidebarOpen && (
                    <div
                        style={{
                            position: 'fixed',
                            top: mousePos.y,
                            left: mousePos.x,
                            width: '10px',
                            height: '10px',
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            pointerEvents: 'none',
                            transform: 'translate(-50%, -50%)',
                        }}
                    ></div>
                )}
            </div>
        </header>
    );
};

export default Header;