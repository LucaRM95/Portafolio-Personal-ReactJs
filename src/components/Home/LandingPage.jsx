import React from 'react';
import About from '../About/About';
import Certifications from '../About/Certifications';
import Projects from '../Projects/Projects';
import Footer from './Footer';
import NavBar from './NavBar';

const LandingPage = () => {
    return (
        <>
            <NavBar />
            <About />
            <Certifications />
            <div className="section-projects container-fluid bg-light">
                <div className="row">
                    <div className="d-flex justify-content-center align-items-center">
                        <Projects />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default LandingPage;
