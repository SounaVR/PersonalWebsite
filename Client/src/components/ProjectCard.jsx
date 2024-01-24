import React, { useState } from 'react';
import PopupOverlay from './PopupOverlay';

const ProjectCard = ({ id, title, description, imageUrl, techStack }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <div>
            {isPopupOpen && 
                <PopupOverlay
                    projectId={id}
                    onClose={togglePopup}>
                </PopupOverlay>
            }
            <div className="project-card" onClick={togglePopup}>
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
        </div>
    );
};

export default ProjectCard;