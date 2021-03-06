import React from 'react';
import About from '../About/About';
import Certifications from '../About/Certifications';
import HumanSkills from '../About/HumanSkills';
import Projects from '../Projects/Projects';

const LandingPage = () => {
    return (
        <>
            <About />
            <Certifications />
            <HumanSkills />
            <div className="section-projects container-fluid">
                <div className="d-flex justify-content-center">
                    <h1 className="pt-5">Mis proyectos</h1>
                </div>
                <div className="row">
                    <Projects />
                </div>
            </div>
        </>
    )
}

export default LandingPage;
