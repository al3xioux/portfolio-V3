import React from 'react';
import Helmet from '../components/Helmet';
import Doc from '../components/Doc';
import Documentation from '../components/Documentation';


const Documents = () => {
    return (
        <Helmet title="Documents" className='documents'>
            <h2 id="title">Documentation</h2>
            <Doc />
            <Documentation />
        </Helmet>
    );
};

export default Documents;