import React from 'react';
import Helmet from '../components/Helmet';
import Travaux from '../components/Travaux';

const Home = () => {
    return (
        <Helmet title="Home" className='home'>
            <div className="big-title">
                <h2>Alexandre</h2>
                <h1>Developper</h1>
            </div>
            <p id="presentation">Salut ! Moi c'est Alexandre Bonjour, developpeur frontend depuis maintenant 2 ans.</p>
            <h3 id="travaux"><a href='/works'>Travaux</a></h3>
            <Travaux />
            <h3 id="documents"><a href='/documents'>Document</a></h3>
            <div className="cv">
            <h4>CV</h4>
                <section onClick={() => window.open('/bonjour-alexandre-cv.pdf')}></section>
            </div>
        </Helmet>
    );
};

export default Home;