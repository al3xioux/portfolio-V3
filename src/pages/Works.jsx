import React from 'react';
import Helmet from '../components/Helmet';
import Travaux from '../components/Travaux';

const Works = () => {
    return (
        <Helmet title="Travaux" className='works'>
            <h2 id='title'>Travaux</h2>
            <Travaux/>
        </Helmet>
    );
};

export default Works;