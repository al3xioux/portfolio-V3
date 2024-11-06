import React from 'react';
import Helmet from '../components/Helmet';

const ProjetUn = () => {
    return (
        <Helmet title="GAMEHUB" className='gamehub'>
            <h1 >GAMEHUB</h1>
            <p>Gamehub est une plateforme de gestion de tournois pour les jeux vidéo dans la région de Lorraine. Ce projet à été réalisé avec deux de mes camarades dans le cadre de l'école.</p>
            <div className='section-img'>
                <section className='container-img'>
                    <section className='img'></section>
                </section>

            </div>
        </Helmet>
    );
};

export default ProjetUn;