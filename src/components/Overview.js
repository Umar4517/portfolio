import React from 'react';
import Particles from './Particles';
import video from '../assets/cards-video.webm'; // Ensure the path is correct
import '../styles/Overview.css';
import GenAI from '../assets/GenAI.webp';
import Web from '../assets/web.webp';
import mobile from '../assets/mobile.webp';
import backend from '../assets/backend.webp';

const Overview = () => {
  return (
    <section className="overview-section"  id="about">
      {/* Background video */}
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <Particles className="particles-background" />

      {/* Wrapper for Introduction and Cards */}
      <div className="overview-wrapper">
        <div className="intro-card">
          <h1 className="intro-heading">Overview.</h1>
          <p className="intro-description">
            Welcome to the world of Umar Farooq, where technology and creativity converge to create extraordinary digital experiences. With a relentless passion for software engineering and a deep expertise in full-stack development, I specialize in transforming innovative ideas into reality.
          </p>
          <p className="intro-description-1">
            Beyond coding, I am dedicated to continuous learning and collaboration, ensuring that every project I touch is not only efficient and scalable but also groundbreaking. Join me on a journey to push the boundaries of web development and discover what we can achieve together.
          </p>
        </div>

        {/* Cards in one or two lines depending on screen */}
        <div className="cards-wrapper">
          <div className="overview-card">
            <div className="items-center">
              <img src={backend} alt="Web Developer" className="icon" />
            </div>
            <h3>Web Developer</h3>
          </div>

          <div className="overview-card">
            <div className="items-center">
              <img src={Web} alt="MEAN Stack" className="icon"/>
            </div>
            <h3>MEAN Stack Developer</h3>
          </div>

          <div className="overview-card">
            <div className="items-center">
              <img src={GenAI} alt="Generative AI" className="icon1" />
            </div>
            <h3>Generative AI</h3>
          </div>

          <div className="overview-card">
            <div className="items-center">
              <img src={mobile} alt="APIs Developer" className="icon" />
            </div>
            <h3>APIs Developer</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
