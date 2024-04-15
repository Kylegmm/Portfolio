import React from 'react';
import './App.css'; // Make sure to create a CSS file for styles

function Links() {
  return (
    <section id="links">
      <h1 style={{color:'white'}}>Find Me Online</h1>
      <div className="social-links">
        <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="link">
          <i className="fab fa-facebook-f"></i> Facebook
        </a>
        <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="link">
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="link">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="link">
          <i className="fab fa-linkedin-in"></i> LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Links;
