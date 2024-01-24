import React, { useEffect } from 'react';
import projectsData from '../assets/projectsData';
import ProjectCard from './ProjectCard';

import '../css/Projects.css';

const Projects = () => {
    useEffect(() => {
        document.title = "Projects";
    }, []);

    return (
        <>
            <p style={{textAlign: 'center'}}>Pro tip: you can click on cards to display more information</p>
            <div className="cards-root">
                {projectsData.map((projectsData) => (
                    <ProjectCard key={projectsData.id} {...projectsData} />
                ))}
            </div>
            
            <p style={{textAlign: 'center', fontSize: '12px'}}>Side note: the website will be improved, you can follow the development on the <a href='https://github.com/SounaVR/PersonalWebsite' target='_blank' rel='noopener noreferrer' className='github-repo'>GitHub page</a>.</p>
        </>
    );
};

export default Projects;