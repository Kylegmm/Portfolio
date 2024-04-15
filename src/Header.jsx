import React from 'react';
import './App.css';

function Header() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // for smooth scrolling
        });
    };

    return (
        <header className="header">
            <h1>Kyle's Software Resume</h1>
            <nav>
                <ul className="nav-links">
                    <li><button onClick={scrollToTop}>Home</button></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#links">Links</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

