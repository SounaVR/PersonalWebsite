import React from 'react';
import ProjectCard from './ProjectCard';

import '../css/Projects.css';

const projectsList = [
    {
        title: 'Project 1',
        description: 'Description for Project 1.',
        techStack: ['HTML5', 'CSS3', 'JavaScript'],
        imageUrl: 'https://via.placeholder.com/300x200'
    },
    {
        title: 'Project 2',
        description: 'Description for Project 2.',
        techStack: ['React', 'NodeJS', 'MongoDB'],
        imageUrl: 'https://via.placeholder.com/300x200'
    },
];

const Projects = () => {
    return (
       <div className="cards-root">
            {projectsList.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
       </div>
    );
};

export default Projects;