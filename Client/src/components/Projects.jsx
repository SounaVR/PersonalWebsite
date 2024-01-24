import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import projectsData from '../assets/projectsData';
import ProjectCard from './ProjectCard';

import '../css/Projects.css';

const Projects = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        document.title = "Projects";
    }, []);

    return (
        <>
            <p style={{textAlign: 'center'}}>{t('proTip')}</p>
            <div className="cards-root">
                {projectsData.map((projectsData) => (
                    <ProjectCard key={projectsData.id} i18n={i18n} {...projectsData} />
                ))}
            </div>
            
            <p style={{textAlign: 'center', fontSize: '12px'}}>{t('sideNote')} <a href='https://github.com/SounaVR/PersonalWebsite' target='_blank' rel='noopener noreferrer' className='github-repo'>GitHub page</a>.</p>
        </>
    );
};

export default Projects;