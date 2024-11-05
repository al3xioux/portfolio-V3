import React from 'react';

const Helmet = (props) => {

    document.title = props.title
    return (
        <main className={props.className}>{props.children}</main>
    )
}

export default Helmet