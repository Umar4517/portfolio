import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Particles from './Particles';
import '../styles/Features.css';
import { FaRegLightbulb , FaUsers, FaCogs } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaRegLightbulb className="feature-icon" />,
      title: 'Adaptability in All Situations',
      description: 'In a fast-changing environment, I quickly adapt to new tools, technologies, and project requirements, ensuring smooth and efficient transitions',
    },
    {
      icon: <FaUsers className="feature-icon" />,
      title: 'Collaboration',
      description: 'Where innovation thrives through synergy. Committed to creating groundbreaking web solutions, together.',
    },
    {
      icon: <FaCogs className="feature-icon" />,
      title: 'Technology',
      description: 'Where cutting-edge technology meets creativity. Committed to driving innovation and crafting tomorrow’s web solutions today.',
    },
    {
      icon: <FaRegLightbulb className="feature-icon" />,
      title: 'Smart Work',
      description: 'Driven by innovation and efficiency. Dedicated to smart work that transforms ideas into exceptional digital experiences.',
    }
  ];


  return (
    <section className="features-section">
      {/* Particles background */}
      <Particles />

      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="section-title"
      >
        Why Choose Me?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="section-subtitle"
      >
        Providing unmatched value through cutting-edge technology and innovative design.
      </motion.p>

      <div className="features-grid">
        {features.map((feature, index) => (
          <Tilt key={index} className="tilt-card" tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="icon-wrapper">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Features;
