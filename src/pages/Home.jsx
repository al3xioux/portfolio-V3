import React from 'react';
import Helmet from '../components/Helmet';
import Travaux from '../components/Travaux';
import Veille from '../components/Veille';
import { Link } from 'react-router-dom';

const Home = () => {
    const name = "Alexandre";
    const surname = "BONJOUR";

    return (
        <Helmet title="Home" className='home'>
            <div className="big-title-home">
                <h2>
                    {name.split('').map((letter, index) => (
                        <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                            {letter}
                        </span>
                    ))}
                </h2>
                <h1>
                    {surname.split('').map((letter, index) => (
                        <span key={index} style={{ animationDelay: `${(name.length + index) * 0.1}s` }}>
                            {letter}
                        </span>
                    ))}
                </h1>
            </div>
            <p id="presentation-home">Hello ! Actuellement en deuxième année de BTS SIO, je travaille chez Ahead Digital où je développe des systèmes multi-agents d'intelligence artificielle.</p>
            <br></br>
            <br></br>
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