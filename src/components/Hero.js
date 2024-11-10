import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';  // Import directly from 'typed.js'
import '../styles/Hero.css';
import Particles from './Particles';
import video from '../assets/space-background.webm';
import userImage from '../assets/umarfarooq.jfif';

const Hero = () => {
  // State to track if it's a desktop view
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Reference for the text element where Typed will attach
  const typedElement = useRef(null);
  const typedInstance = useRef(null); // Store the instance of Typed.js

  useEffect(() => {
    // Function to handle resize events
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // If it's desktop and the typedElement ref is available, initialize Typed.js
    if (isDesktop && typedElement.current) {
      typedInstance.current = new Typed(typedElement.current, {
        strings: [
          "Web Developer",
          "BackEnd Developer",
          "FullStack Developer",
          "Wordpress Developer",
          "Shopify Developer",
          "APIs Developer"
        ],
        typeSpeed: 50,
        backSpeed: 40,
        loop: true,
      });
    }

    // Cleanup Typed instance when component or screen size changes
    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, [isDesktop]);

  return (
    <section className="hero-section">
      {/* Background Video */}
      <div className="video-container-1">
        <video autoPlay loop muted className="background-video-1">
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <div className="content-wrapper">
        {/* Left Side - Text Content with Vertical Line */}
        <div className="flex items-center">
          <div className="vertical-line-wrapper">
            <div className="dot"></div> {/* Small dot at the top of the line */}
            <div className="vertical-line"></div>
          </div>
          <div className="hero-content">
            <h4 className="gradient-text">
              Hi, I'm Umar <br />
              {isDesktop ? (
                <span ref={typedElement}></span> // Ref for the typed effect
              ) : (
                <span>Web Developer</span> // Static text for mobile
              )}
            </h4>
            <p className="description">
              I'm a versatile web developer specializing in front-end, back-end, and full-stack development. With expertise in React.js, Python, MEAN stack, and API creation, I build dynamic and scalable web applications. I also develop custom ChatGPTs, combining technical skills with creative problem-solving to deliver modern web solutions.
            </p>
            <div className="buttons-container flex space-x-4">
            <a href="https://chatgpt.com/g/g-yVY1jOFK1-umar-s-assistant" target="_blank" rel="noopener noreferrer">
              <button className="transparent-btn">Umar Assistant</button>
              </a>
              <a href="#contact">
                <button className="transparent-btn">Contact</button>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Image with Animation */}
        <div className="image-container">
          <img
            src={userImage}
            alt="Umar Farooq"
            className="user-image"
          />
        </div>
      </div>

      <Particles />
    </section>
  );
};

export default Hero;
