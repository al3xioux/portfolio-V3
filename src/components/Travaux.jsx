import React from 'react';
import { Link } from 'react-router-dom';

const Travaux = () => {
    return (
        <div className="works">

            <div className="works-container">
                <section className="works-section">
                    <Link to='/projetun'>
                        <h4>GAMEHUB</h4>
                        <p>site web de tournois e-sportif</p>
                    </Link>
                        
                </section>
                <section className="works-section">
                    <h4>ZQSD</h4>
                    <p>site web de paris e-sportif</p>
                </section>
                <section className="works-section">
                    <h4>BIBLIO V2</h4>
                    <p>site web d'une bibliothèque</p>
                </section>
                <section className="works-section"></section>
            </div>
        </div>
    );
};

export default Travaux;