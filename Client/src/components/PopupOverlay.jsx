import React from 'react';
import projectsData from '../assets/projectsData';

const PopupOverlay = ({ i18n, onClose, projectId }) => {
    const projectDetails = projectsData.find((project) => project.id === projectId);

    const handleOverlayClick = (event) => {
        if (event.target.classList.contains('popup-overlay')) {
            onClose();
        }
    };

    return (
        <div className="popup-overlay" onClick={handleOverlayClick}>
            <div className="popup">
                <div className="popup-content">
                    <h2>{projectDetails.title[i18n.language]}</h2>
                    <a href={projectDetails.githubURL} target='_blank' rel='noopener noreferrer' className='github-repo'>GitHub</a>
                    {Object.keys(projectDetails.moreDetails).map((key) => (
                        <p>{projectDetails.moreDetails[key][i18n.language]}</p>
                    ))}
                    <div className="popup-tech-stack">
                        {projectDetails.techStack.map((tech, index) => (
                            <img key={index} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.toLowerCase()}/${tech.toLowerCase()}-original.svg`} alt={tech} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupOverlay;