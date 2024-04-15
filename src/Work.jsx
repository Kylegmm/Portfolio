import React from 'react';
import './App.css'; // Ensure you have a CSS file for styles\
import python from './images/Python.png';
import project2 from './images/Webpage.png'

function Work() {
  const projects = [
    {
      name: "Monthly Payment Report",
      description: "Python project to recount the monthly payment of a business.",
      imageUrl: python,
      githubUrl: "https://github.com/Kylegmm/QAP_5_KMM"
    },
    {
      name: "Project Two",
      description: "Webpage for a band called the Echo waves.",
      imageUrl: project2,
      githubUrl: "https://github.com/Kylegmm/Sprint_1_KMM_LM_SS"
    },
  ];

  return (
    <section id="work">
      <h1>My Work</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <img src={project.imageUrl} alt={project.name} className="project-image"/>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
