import React from 'react'

const Doc = () => {
    return (
        <>
            <div className="cv">
                <h3>CV</h3>
                <section onClick={() => window.open('/bonjour-alexandre-cv.pdf')}></section>
            </div>

            <div className="tableau">
                <h3>Tableau E4</h3>
                <section onClick={() => window.open('/tableau-e4.pdf')}></section>
            </div>
        </>

    )
}

export default Doc