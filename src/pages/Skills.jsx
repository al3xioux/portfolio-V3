import React from 'react';
import Helmet from '../components/Helmet';

const Skills = () => {
    return (
        <Helmet title="Compétences" className='skills'>
            <h2 id="skills-title">Compétences</h2>

            <div className="skills">
                <section>
                    <h3>WEB</h3>
                    <div className="separation1"></div>
                    <section className="skills-name">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>PHP</p>
                        <p>Javascript</p>
                        <p>React</p>
                    </section>
                </section>

                <section>
                    <h3>Base de données</h3>
                    <div className="separation1"></div>
                    <section className="skills-name">
                        <p>SQL</p>
                        <p>MySQL</p>
                        <p>Un autre truc</p>
                    </section>
                </section>

                <section>
                    <h3>Supervision</h3>
                    <div className="separation1"></div>
                    <section className="skills-name">
                        <p>GLPI</p>
                    </section>
                </section>

                <section>
                    <h3>Autres</h3>
                    <div className="separation1"></div>
                    <section className="skills-name">
                        <p>Figma</p>
                        <p>Git</p>
                    </section>
                </section>

            </div>
        </Helmet>
    );
};

export default Skills;