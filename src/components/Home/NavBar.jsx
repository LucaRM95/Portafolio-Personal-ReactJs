import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.webp';

const NavBar = () => {
    return (
        <header className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand animate__animated animate__fadeInLeft" to="./" >
                    <img src={ Logo } alt="" width="35" height="35" className="d-inline-block align-text-top me-2" />
                    Mi Portafolio
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div id="nav" className="navbar-nav">
                        <Link className="nav-link" to="./sobre-mi">Sobre mi</Link>
                        <Link className="nav-link" to="./proyectos">Proyectos</Link>
                        <a className="nav-link" href="#contact">Contacto</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar;
