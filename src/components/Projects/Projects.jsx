import React from 'react';
import data from '../../Base/proyectos.json';
import '../../assets/css/card.css';
import '../../assets/img/Proyecto-Ingresos.png';
import '../../assets/img/MI-Indumentaria.png';
import '../../assets/img/Channel26News.png';

const Projects = () => {

    return data.map( project => {
        
        return (
            <div key={project.id} className="col-md-3">
                <div className="card-project">
                    <div className="image">
                        <img src={project.img} alt="Projects"/>
                    </div>
                    <div className="details">
                        <div className="center">
                            <h1>{project.title}</h1>
                            <p>{project.description}</p>
                            <ul>
                                <li><a href={project.link} target="_blank"><i className="fas fa-globe" aria-hidden="true"></i></a></li>
                                <li><a href={project.githubLink} target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/luca-rojas-massey-a21b531a0/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>
        )
    })
}

export default Projects;

/*
    <body>
        <div className="card">
            <div className="image">
            <img src="http://1.bp.blogspot.com/-EhPr4LXcywE/Udr594sPHTI/AAAAAAAAAJ4/Tv4y4CBLTPM/s400/Cristina-Otero-2.jpg"/>
            </div>
            <div className="details">
            <div className="center">
                <h1>Someone famous<br><span>team leader</span></h1>
                <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
                <ul>
                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                </ul>
            </div>
            </div>
        </div>
    </body>
*/