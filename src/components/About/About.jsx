import React from 'react';
import photo from '../../assets/img/image-about-me.png';
import '../../assets/css/styles.css';

const About = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="header col-md-12">
                    <div className="d-flex justify-content-center mt-5">
                        <img className="rounded-circle" src={ photo } alt="" />
                    </div>
                    <div className="title col-md-12 d-flex justify-content-center mt-5">
                        <h1>Desarrollador Front-End</h1>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="about-me mt-5">
                            <div className="card" style={{width: 18+"rem"}}>
                                <div className="card-body">
                                    <h5 className="card-title">Sobre Mí</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Luca Rojas Massey</h6>
                                    <p className="card-text">
                                        Mi nombre es Luca, tengo 26 años y soy desarrollador front-end con conocimientos avanzados en HTML5, CSS3, Bootstrap, Sass, JavaScript, jQuery y React.
                                        Espero que disfurtes ver mis proyectos y, en caso de querer contactarme te dejo los links de mis redes!
                                    </p>
                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-warning">Más...</button>
                                    </div>
                                </div>
                            </div>       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
