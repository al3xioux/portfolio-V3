import React from 'react';

const Travaux = () => {
    return (
        <div className="works">

            <div className="works-container">
                <section className="works-section">
                    <a href='https://gitlab.com/MaxenceIPSSI/gamehub' target='blank'>
                        <h4>GAMEHUB</h4>
                        <p>site web de tournois e-sportif</p>
                    </a>
                </section>
                <section className="works-section">
                    <a href='https://github.com/al3xioux/mind_website' target='blank'>
                        <h4>Mind Technologies</h4>
                        <p>Refonte du site web de mon stage</p>
                    </a>
                </section>
                <section className="works-section">
                    <a href='https://github.com/al3xioux/bibliotheque-v2' target='blank'>
                        <h4>BIBLIO V2</h4>
                        <p>site web d'une bibliothèque fictive</p>
                    </a>
                </section>
                <section className="works-section"></section>
            </div>
        </div>
    );
};

export default Travaux;