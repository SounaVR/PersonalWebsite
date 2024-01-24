import React, { useState } from 'react';
import PopupOverlay from './PopupOverlay';

const ProjectCard = ({ id, title, description, imageUrl, techStack, i18n }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const getTitle = () => {
        if (typeof title === 'object') {
            return title[i18n.language || 'en'] || title['en'];
        }
        return title;
    };

    const getDescription = () => {
        if (typeof description === 'object') {
            return description[i18n.language || 'en'] || description['en'];
        }
        return description;
    };

    return (
        <div>
            {isPopupOpen && 
                <PopupOverlay
                    i18n={i18n}
                    projectId={id}
                    onClose={togglePopup}>
                </PopupOverlay>
            }
            <div className="project-card" onClick={togglePopup}>
                <img className="project-image" src={imageUrl} alt={`${title} Image`} />
                <div className="project-content">
                    <div className="project-title">{getTitle()}</div>
                    <div className="project-description">{getDescription()}</div>
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