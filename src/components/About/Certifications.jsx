import React from 'react';
import jsAndjquery from '../../assets/img/JS-and-jQuery.png';
import DesarrolloWeb from '../../assets/img/Desarrollo-web.png';
import ReactAndHooks from '../../assets/img/React-reactHooks.png';

const Certifications = () => {

    return (
        <div className='certification-section container-fluid bg-dark'>
            <div className="courses row justify-content-center">
                <div className="col-md-12 ">
                    <div className="row">
                        <div className="courses-cards col-md-4">
                            <div className="d-flex flex-column align-items-center">
                                <img className="rounded-circle" src={DesarrolloWeb} alt="developerWeb"/>
                                <h4 className="mt-5 mb-4">HTML, CSS, Bootstrap y Sass</h4>
                                <h6 className="card-subtitle mb-4">Certificado emitido por coderhouse</h6>
                                <a 
                                    href="https://www.coderhouse.com/certificados/613bdf014438d100174187dc"
                                    className="btn btn-outline-warning"
                                >
                                    Ver certificado
                                </a>
                            </div>
                        </div>
                        <div className="courses-cards col-md-4">
                            <div className="d-flex flex-column align-items-center">
                                <img className="rounded-circle" src={jsAndjquery} alt="JS-jQuery"/>
                                <h4 className="mt-5 mb-4">JavaScript y jQuery</h4>
                                <h6 className="card-subtitle mb-4">Certificado emitido por coderhouse</h6>
                                <a 
                                    href="https://www.coderhouse.com/certificados/619644d587868f0ada2e6c64"
                                    className="btn btn-outline-warning"
                                >
                                    Ver certificado
                                </a>
                            </div>
                        </div>
                        <div className="courses-cards col-md-4 ">
                            <div className="d-flex flex-column align-items-center">
                                <img className="rounded-circle" src={ReactAndHooks} alt="React-ReactHooks"/>
                                <h4 className="mt-5 mb-4">React</h4>
                                <h6 className="card-subtitle mb-4">Certificado emitido por coderhouse</h6>
                                <a 
                                    href="https://www.coderhouse.com/certificados/619644d587868f0ada2e6c64"
                                    className="btn btn-outline-warning"
                                >
                                    Ver certificado
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certifications;
