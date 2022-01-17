import React from 'react';
import HumanSkills from '../About/HumanSkills';
import Projects from './Projects';

const ProjectPage = () => {

    return (
        <>
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

export default ProjectPage;
