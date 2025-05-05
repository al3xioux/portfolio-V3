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
                        <p>SQL</p>
                        <p>MySQL</p>
                    </section>
                </section>

                <section>
                    <h3>Intelligence artificielle</h3>
                    <div className="separation1"></div>
                    <section className="skills-name">
                        <p>LangGraph</p>
                        <p>OpenAI-sdk</p>
                    </section>
                </section>

                <section>
                    <h3>Autres</h3>
                    <div className="separation1"></div>
                    <section className="skills-name">
                        <p>Figma</p>
                        <p>Photoshop</p>
                        <p>GitHub</p>
                    </section>
                </section>

            </div>
        </Helmet>
    );
};

export default Skills;