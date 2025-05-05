import React from 'react';

const Travaux = () => {
    return (
        <div className="works">

            <div className="works-container">
                <section className="works-section">
                    <a href='https://github.com/al3xioux/raja-newsletter-v2' target='blank'>
                        <h4>Raja newsletter</h4>
                        <p>Créateur de newsletter personnalisées</p>
                    </a>
                </section>
                <section className="works-section">
                    <a href='https://github.com/samsaf/Agent-merch' target='blank'>
                        <h4>Bot merch</h4>
                        <p>Amélioration de fiche produit</p>
                    </a>
                </section>
                <section className="works-section">
                    <a href='https://gitlab.com/MaxenceIPSSI/gamehub' target='blank'>
                        <h4>GAMEHUB</h4>
                        <p>site web de tournois e-sportif</p>
                    </a>
                </section>
                <section className="works-section"></section>
            </div>
        </div>
    );
};

export default Travaux;