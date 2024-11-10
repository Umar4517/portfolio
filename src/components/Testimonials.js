import React from 'react';
import '../styles/Testimonials.css';
import Particles from './Particles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import client1 from '../assets/JaneDeo.webp';
import client2 from '../assets/johnSmith.webp';
import client3 from '../assets/Emilly.webp';

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <Particles />
      <h2 className="section-title">What Others Say</h2>
      <div className="testimonials-wrapper">
        <div className="testimonial-card">
          <p className="testimonial-text">
            "The team provided exceptional service from start to finish. They communicated effectively throughout the process, ensuring that our requirements were fully understood and implemented perfectly. The support we received was outstanding, and they even went above and beyond to suggest improvements to our project. Highly recommended for anyone looking for a professional and dedicated development team."
          </p>
          <div className="testimonial-stars">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} className="star-icon" />
            ))}
          </div>
          <div className="testimonial-author">
            <img src={client1} alt="Client 1" className="testimonial-avatar" />
            <div className="author-details">
              <h4>Jane Doe</h4>
              <p>CEO, Tech Solutions</p>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <p className="testimonial-text">
            "Working with this team has been a game-changer for our startup. Their ability to adapt to our needs, provide innovative solutions, and meet tight deadlines was truly impressive. The final product exceeded our expectations, and the attention to detail was remarkable. I highly recommend them for any tech project you may have."
          </p>
          <div className="testimonial-stars">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} className="star-icon" />
            ))}
          </div>
          <div className="testimonial-author">
            <img src={client2} alt="Client 2" className="testimonial-avatar" />
            <div className="author-details">
              <h4>John Smith</h4>
              <p>CTO, Innovative Startups</p>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <p className="testimonial-text">
            "The developers demonstrated great expertise in both design and development, delivering a product that was not only functional but visually stunning. Their willingness to collaborate and integrate our feedback seamlessly made the whole experience stress-free. I couldn’t be happier with the results, and I will definitely work with them again in the future."
          </p>
          <div className="testimonial-stars">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} className="star-icon" />
            ))}
          </div>
          <div className="testimonial-author">
            <img src={client3} alt="Client 3" className="testimonial-avatar" />
            <div className="author-details">
              <h4>Emily Johnson</h4>
              <p>Project Manager, Design Hub</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
