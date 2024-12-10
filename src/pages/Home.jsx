import React from 'react';
import Helmet from '../components/Helmet';
import Travaux from '../components/Travaux';
import Veille from '../components/Veille';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <Helmet title="Home" className='home'>
            <div className="big-title-home">
                <h2>Alexandre</h2>
                <h1>Developpeur</h1>
            </div>
            <p id="presentation-home">Salut ! Moi c'est Alexandre Bonjour, développeur full stack depuis maintenant 2 ans.</p>
            <Link to="/works"><h3 id="travaux">Travaux</h3></Link>
            <Travaux />
            <Link to="/documents"><h3 id="documents">Document</h3></Link>
            <div className="cv-home">
            <h4>CV</h4>
                <section onClick={() => window.open('/bonjour-alexandre-cv.pdf')}></section>
            </div>
            <Veille />
        </Helmet>
    );
};

export default Home;