import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../components/About/AboutPage';
import LandingPage from '../components/Home/LandingPage';
import ProjectPage from '../components/Projects/ProjectPage';

const AppRouter = () => {
    return (
            <Routes>
                <Route path="/" element={<LandingPage />}/>
                <Route path="/proyectos" element={<ProjectPage />}/>
                <Route path="/:id" element={<AboutPage />}/>
            </Routes> 
    )
}

export default AppRouter;
