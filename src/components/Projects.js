import React, { useState } from 'react';
import Slider from 'react-slick';
import '../styles/Projects.css';
import Particles from './Particles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

const ProjectsComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('wordpress');

  const projectData = {
    wordpress: [
      { id: 1, name: "WordPress Project 1", description: "Offers dropshipping and fulfillment services for major marketplaces.", imageUrl: require("../assets/project1.png"), link: "https://3pldropship.com/" },
      { id: 2, name: "WordPress Project 2", description: "Business coaching and entrepreneurship resources", imageUrl: require("../assets/project10.png"), link: "https://allandraper.com/" },
      { id: 3, name: "WordPress Project 3", description: "Cybersecurity expert, author, and podcast host", imageUrl: require("../assets/project11.png"), link: "https://dewaynehart.com/" },
      { id: 4, name: "WordPress Project 4", description: "Healthcare plans focusing on affordability and transparency.", imageUrl: require("../assets/project12.png"), link: "https://gethealthcoin.com/" },
      { id: 5, name: "WordPress Project 5", description: "Nearshore manufacturing services in Mexico.", imageUrl: require("../assets/project13.png"), link: "https://mademanufacturingsolutions.com/" },
      { id: 6, name: "WordPress Project 6", description: "Eco-friendly pest control in the Pacific Northwest.", imageUrl: require("../assets/project15.png"), link: "https://naturapestcontrol.com/" },
      { id: 7, name: "WordPress Project 7", description: "24/7 HVAC services in Las Vegas.", imageUrl: require("../assets/projectt16.png"), link: "https://callpinkypromise.com/" },
      { id: 8, name: "WordPress Project 8", description: " Self-watering planters for indoor gardening.", imageUrl: require("../assets/project3.png"), link: "https://potandpebble.com/" },
      { id: 9, name: "WordPress Project 9", description: "Cybersecurity consulting and risk management.", imageUrl: require("../assets/project17.png"), link: "https://semais.net/" },
    ],
    shopify: [
      { id: 1, name: "Shopify Project 1", description: " Offers pet medications and supplies for various animals.", imageUrl: require("../assets/project19.png"), link: "https://piccardmeds4pets.com/ " },
      { id: 2, name: "Shopify Project 2", description: "Specializes in outdoor heating solutions like patio heaters.", imageUrl: require("../assets/project4.png"), link: "https://www.alfrescoheat.co.uk/ " },
      { id: 3, name: "Shopify Project 3", description: "Sells handmade Indian snacks and chutneys.", imageUrl: require("../assets/project6.png"), link: "https://www.cheekyfoodcompany.com/" },
      { id: 4, name: "Shopify Project 4", description: "Outdoor clothing and golf gear brand.", imageUrl: require("../assets/project7.png"), link: "https://www.druids.com/ " },
      { id: 5, name: "Shopify Project 5", description: "Provides mobility aids and healthcare products.", imageUrl: require("../assets/project8.png"), link: "https://www.mobility2you.com/" },
      { id: 6, name: "Shopify Project 6", description: "Offers protein snacks and supplements in the UK.", imageUrl: require("../assets/project9.png"), link: "https://proteinpackage.co.uk/" },
      { id: 7, name: "Shopify Project 7", description: "Scandinavian design and storage solutions retailer.", imageUrl: require("../assets/project.png"), link: "https://tengo.se/" },
      { id: 8, name: "Shopify Project 8", description: "Supplies pitching machines and training equipment in Australia.", imageUrl: require("../assets/project5.png"), link: "https://pitchitup.com.au/" },
    ],
    custom_chatgpts: [
      { id: 1, name: "Custom ChatGPT 1", description: "Quiz Master ", imageUrl: require("../assets/ChatGpt.jpg"), link: "https://chatgpt.com/g/g-FDv6X3clw-giaic-quiz-master-prompt" },
    ],
    portfolio: [
      {
        id: 1,
        name: "Portfolio Website",
        description: "My portfolio.",
        imageUrl: require("../assets/portfolio.png"),
        link: "https://umarfarooq.com",
        gitLink: "https://github.com/umarfarooq/portfolio-repo"
      },
    ],
  };

  const projects = projectData[selectedCategory];

  // Slider settings for react-slick
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,           // Enable autoplay
    autoplaySpeed: 1500,      // Set autoplay speed (milliseconds)
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const isSliderCategory = selectedCategory === 'wordpress' || selectedCategory === 'shopify';

  return (
    <div className="projects-container" id="projects">
      <Particles />
      <h2 className="projects-title">Projects</h2> {/* Add title here */}
      <div className="projects-sidebar">
        <ul>
          <li className={selectedCategory === 'wordpress' ? 'active' : ''} onClick={() => setSelectedCategory('wordpress')}>WordPress</li>
          <li className={selectedCategory === 'shopify' ? 'active' : ''} onClick={() => setSelectedCategory('shopify')}>Shopify</li>
          <li className={selectedCategory === 'custom_chatgpts' ? 'active' : ''} onClick={() => setSelectedCategory('custom_chatgpts')}>Custom ChatGPTs</li>
          <li className={selectedCategory === 'portfolio' ? 'active' : ''} onClick={() => setSelectedCategory('portfolio')}>Portfolio</li>
        </ul>
      </div>
      {isSliderCategory ? (
        <Slider {...settings} className="projects-main">
          {projects.map((project) => (
            <div className="project-item" key={project.id}>
              <img src={project.imageUrl} alt={project.name} className="project-image" />
              <div className="project-overlay">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="overlay-icon">
                  <FontAwesomeIcon icon={faEye} />
                </a>
                {project.name === "Portfolio Website" && (
                  <a href={project.gitLink} target="_blank" rel="noopener noreferrer" className="overlay-icon">
                    <FontAwesomeIcon icon={faCodeBranch} />
                  </a>
                )}
              </div>
              <div className="project-details">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="projects-main static-view">
          {projects.map((project) => (
            <div className="project-item" key={project.id}>
              <img src={project.imageUrl} alt={project.name} className="project-image" />
              <div className="project-overlay">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="overlay-icon">
                  <FontAwesomeIcon icon={faEye} />
                </a>
                {project.name === "Portfolio Website" && (
                  <a href={project.gitLink} target="_blank" rel="noopener noreferrer" className="overlay-icon">
                    <FontAwesomeIcon icon={faCodeBranch} />
                  </a>
                )}
              </div>
              <div className="project-details">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsComponent;
