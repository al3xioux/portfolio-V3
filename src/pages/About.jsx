import React from 'react';
import Helmet from '../components/Helmet';

const About = () => {
    return (
        <Helmet title="A propos" className='about'>
            <div className="big-title">
                <h2>Alexandre</h2>
                <h2>Bonjour</h2>
            </div>
            <p id="presentation">Mon but en tant que développeur est de pouvoir creer ce que les autres ne feront pas. Je prévois de poursuivre mes études en bachelor pour approfondir et renforcer mes compétences.</p>

            <div className="bts">
                <h3>BTS SIO SLAM</h3>
                <p>Le BTS SIO option SLAM forme en deux ans des spécialistes du développement logiciel. Les étudiants y apprennent à concevoir, réaliser et maintenir des applications adaptées aux besoins des entreprises. Ils acquièrent des compétences en programmation, gestion de bases de données et développement web, les préparant à créer des solutions logicielles sur mesure.</p>
            </div>

            <div className="ipssi">
                <h3>IPSSI</h3>
                <p>L'école IPSSI est une institution supérieure spécialisée dans les domaines de l'informatique et du numérique. Elle propose des formations de Bac+2 à Bac+5, dispensées en initial ou en alternance, visant à former des experts capables de répondre aux défis technologiques actuels.</p>
            </div>

            <div className="separation1"></div>
        </Helmet>
    );
};

export default About;