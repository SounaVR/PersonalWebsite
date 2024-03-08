import React from 'react';
import projectsData from '../assets/projectsData';
import { useTranslation } from 'react-i18next';

const PopupOverlay = ({ i18n, onClose, projectId }) => {
    const { t } = useTranslation();
    const projectDetails = projectsData.find((project) => project.id === projectId);

    const handleOverlayClick = (event) => {
        if (event.target.classList.contains('popup-overlay')) {
            onClose();
        }
    };

    return (
        <div className="popup-overlay" onClick={handleOverlayClick}>
            <div className="popup">
                <div className="popup-header">
                    <h2>{projectDetails.title[i18n.language]}</h2>
                    {projectDetails.githubURL &&
                        <a href={projectDetails.githubURL} target='_blank' rel='noopener noreferrer' className='github-repo'>GitHub</a>
                    }
                    {!projectDetails.githubURL && <p>{t('closedSource')}</p>}
                </div>
                <div className="popup-body">
                    {Object.keys(projectDetails.moreDetails).map((key) => (
                        <p>{projectDetails.moreDetails[key][i18n.language]}</p>
                    ))}
                </div>
                <div className="popup-tech-stack">
                    {projectDetails.techStack.map((tech, index) => (
                        <img key={index} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.toLowerCase()}/${tech.toLowerCase()}-original.svg`} alt={tech} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopupOverlay;