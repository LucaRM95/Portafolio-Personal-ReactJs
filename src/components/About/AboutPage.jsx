import React from 'react';
import { useParams } from 'react-router-dom';
import About from './About';
import Certifications from './Certifications';

const AboutPage = () => {

    let sassClass = "";
    let btn = "";
    const param = useParams()
    
    if(param.id === "sobre-mi"){
        sassClass = "certification-section-alt container-fluid";
        btn = "btn btn-outline-dark";
    }
    return (
        <>
            <About />
            <Certifications sassClass={sassClass} button={btn}/>
        </>
    )
}

export default AboutPage;
