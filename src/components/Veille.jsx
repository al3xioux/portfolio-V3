import React from "react";
import { Link } from "react-router-dom";

const Veille = () => {
    return (
        <div className="veille">
            <h3>Veille Technologique</h3>
            <div className="works-container">
                <section className="veille-section">
                    <Link to='/veilleun'>
                        <h4>LangGraph </h4>
                    </Link>
                </section>
                <section className="veille-section">
                    <Link to='/veilledeux'>
                        <h4>L’IA dans la création web</h4>
                    </Link>
                </section>
                <section className="veille-section"></section>
            </div>
        </div>
    );
};

export default Veille;