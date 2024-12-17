import React from 'react';
import Helmet from '../components/Helmet';

const Experiences = () => {
    return (
        <Helmet title="Experiences" className='experiences'>
            <h2 id="experience-title">Expérience</h2>

            <div className="exp">
                <h3>Stage</h3>
                <div className="separation1"></div>
                <section>
                    <h4>Mind Technologies</h4>
                    <p className="date">Mai 2024 - Juin 2024</p>
                    <p>Durant mon stage, j'ai appris à configurer des pare-feux et à faire de la supervision de matériels.</p>
                </section>
            </div>

            <div className="exp">
                <h3>Alternance</h3>
                <div className="separation1"></div>
                <section>
                    <h4>Ahead Digital</h4>
                    <p className="date">Septembre 2024 - Juillet 2025</p>
                    <p>Je suis actuellement en alternance où je travaille dans l'intelligence artificielle, plus particulièrement avec l'API ChatGPT. Mais aussi avec un nouvel outil appelé LangGraph pour gérer plusieurs agents en même temps.</p>
                </section>
            </div>
        </Helmet>
    );
};

export default Experiences;