import React from 'react';
import data from '../data/data.json';
import './Projects.css';



const Projects = () => {

    const { projects } = data;

    return (
        <section className="projects" id='projects'>
            <h2 className="section-title">I Miei Progetti</h2>
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
                            {/* <div className="project-tech">
                                {project.tech.map((t, index) => (
                                    <span key={index}>{t}</span>
                                ))}
                            </div> */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;