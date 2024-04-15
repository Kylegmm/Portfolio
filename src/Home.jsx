import React from 'react';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Links from './Links';
import './App.css'; // Optional if you have specific styles for Home

function Home() {
  return (
    <div className="home">
      <section id="about">
        <About />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="links">
        <Links />
      </section>
    </div>
  );
}

export default Home;
