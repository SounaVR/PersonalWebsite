import React from 'react';

const ProjectCard = ({ title, description, techStack, imageUrl }) => {
    return (
        <div className="project-card">
            <img className="project-image" src={imageUrl} alt={`${title} Image`} />
            <div className="project-content">
                <div className="project-title">{title}</div>
                <div className="project-description">{description}</div>
                <div className="project-tech-stack">
                    {techStack.map((tech, index) => (
                        <img key={index} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.toLowerCase()}/${tech.toLowerCase()}-original.svg`} alt={tech} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;