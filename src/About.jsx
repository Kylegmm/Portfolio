import React from 'react';
import Quiz from './Quiz';
import './App.css';
import profileImage from './images/KyleMM.png'; // Adjust the path as necessary

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <img src={profileImage} alt="Kyle" className="about-image"/>
        <div className="about-text">
          <h1>About Me</h1>
          <p>Hello! My name is Kyle, a professional with a strong passion for technology and innovation. With extensive experience in web development, I specialize in creating dynamic and user-friendly interfaces that enhance user engagement and deliver exceptional user experiences.<br/><br/>Outside of my professional life, I'm an avid reader and enjoy hiking and photography. I believe in continuous learning and am always exploring new technologies and techniques to stay ahead in the fast-paced tech landscape.</p>
        </div>
      </div>
      <Quiz />  {/* Embedding the Quiz component */}
    </section>
  );
}

export default About;

