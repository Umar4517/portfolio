import React from 'react';
import SkillIcons from './SkillIcons';
import '../styles/Skills.css';
import Particles from './Particles'; 

const Skills = () => {
  return (
    <section className="skills-section"   id="skills">
        <Particles />
      <h2 className="skills-heading">My Skills</h2>
      <div className="skills-content-container">
        <div className="skills-text">
          <h3>Technical Expertise</h3>
          <p>
            Specialized in front-end development using React, HTML, and CSS, with experience in back-end technologies like Node.js and MongoDB.
          </p>
          <p>
            Passionate about building responsive, user-friendly Wordpress and Shopify web applications and continually enhancing my skills with the latest technologies.
          </p>
        </div>

      <div className="skills-container">
        <SkillIcons />
      </div>
      </div>
    </section>
  );
};

export default Skills;