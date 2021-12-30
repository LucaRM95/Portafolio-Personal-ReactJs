import React from 'react';
import About from '../About/About';
import Certifications from '../About/Certifications';
import NavBar from './NavBar';

const LandingPage = () => {
    return (
        <>
            <NavBar />
            <About />
            <Certifications />
        </>
    )
}

export default LandingPage;
