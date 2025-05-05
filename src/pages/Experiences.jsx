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
                    <p>Actuellement en alternance chez Ahead Digital, j’ai eu l’opportunité de développer mes compétences dans la création de systèmes multi-agents, notamment grâce à l’outil LangGraph ainsi qu’à l’utilisation de diverses API telles que celles d’OpenAI ou de Google.</p>
                </section>
            </div>
        </Helmet>
    );
};

export default Experiences;