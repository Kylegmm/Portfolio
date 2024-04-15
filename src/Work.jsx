import React from 'react';
import './App.css'; // Ensure you have a CSS file for styles

function Work() {
  const projects = [
    {
      name: "Project One",
      description: "This is a brief description of Project One. It's a responsive web application designed to handle user data securely.",
      imageUrl: "/project1.jpg", // Replace with your image path or URL
      githubUrl: "https://github.com/yourgithub/project1"
    },
    {
      name: "Project Two",
      description: "This is a brief description of Project Two. It features complex algorithms for data analysis and visualization.",
      imageUrl: "/project2.jpg", // Replace with your image path or URL
      githubUrl: "https://github.com/yourgithub/project2"
    },
    {
      name: "Project Three",
      description: "This is a brief description of Project Three. It's a mobile-first application designed for high performance across devices.",
      imageUrl: "/project3.jpg", // Replace with your image path or URL
      githubUrl: "https://github.com/yourgithub/project3"
    }
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
