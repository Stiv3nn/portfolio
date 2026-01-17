import React from 'react';
import data from '../data/data.json';
import './Projects.css';

const Projects = () => {
    const { projects } = data;

    return (
        <section className="projects" id='projects'>
            <div className="project-container">
                {/* SEZIONE INTRODUTTIVA */}
                <div className="project-header">
                    <h2 className="section-title">Soluzioni Digitali e Progetti</h2>
                    <p className="project-subtitle">
                        Dall'ideazione alla distribuzione: ecco una selezione dei miei lavori più recenti.
                        Mi focalizzo sulla creazione di interfacce performanti, accessibili e con un codice pulito.
                    </p>
                    <div className="header-decoration"></div>
                </div>

                {/* GRIGLIA PROGETTI (Inserita nel container per allineamento) */}
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div className="project-card" key={project.id}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <a href={project.link} target='_blank' rel='noreferrer'>Vedi Progetto</a>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((t, index) => (
                                        <span key={index}>{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;