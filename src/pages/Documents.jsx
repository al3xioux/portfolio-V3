import React from 'react';
import Helmet from '../components/Helmet';
import Doc from '../components/Doc';


const Documents = () => {
    return (
        <Helmet title="Documents" className='documents'>
            <h2 id="title">Documentation</h2>
            <Doc />
        </Helmet>
    );
};

export default Documents;