import React from 'react';
import data from '../../Base/proyectos.json';
import '../../assets/css/card.css';

const Projects = () => {

    return data.map( project => {
        
        return (
            <div key={project.id} className="animate__animated animate__fadeInLeft d-flex-center col-xxl-3 col-12 mt-5">
                <div className="card-project">
                    <div className="image">
                        <img src={project.img} alt="Projects"/>
                    </div>
                    <div className="details">
                        <div className="center">
                            <h1>{project.title}</h1>
                            <p>{project.description}</p>
                            <ul>
                                <li>
                                    <a href={project.link}>
                                        <i className="fas fa-globe" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={project.githubLink}>
                                        <i className="fa fa-github" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/luca-rojas-massey-a21b531a0/">
                                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>
        )
    })
}

export default Projects;