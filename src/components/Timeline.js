import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Import the CSS of the library
import Particles from './Particles';
import '../styles/Timeline.css'; // Custom styles for the timeline

const Timeline = () => {
  return (
    <section className="timeline-section relative" id="works">
      <Particles className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="relative z-10">
     
        <h2 className="section-title">Work Experience</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="February 2023 - Present"
            iconStyle={{ background: '#9F79EE', color: '#fff' }}
            contentStyle={{ background: ' rgba(255, 255, 255, 0.08)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #9F79EE ' }}
          >
            <h3 className="vertical-timeline-element-title">WordPress and Shopify Developer</h3>
            <ul>
              <li>Developed and customized WordPress websites for clients, including business sites, e-commerce stores, and blogs.</li>
              <li>Integrated essential plugins like WooCommerce, Elementor, and WPForms to add e-commerce functionality, contact forms, and visual design capabilities. </li>
              <li>Built and maintained online stores using Shopify, creating custom themes and integrating third-party applications to enhance functionality.
              </li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="February 2022 - Present"
            iconStyle={{ background: '#9F79EE', color: '#fff' }}
            contentStyle={{ background: 'rgba(255, 255, 255, 0.08)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #9F79EE' }}
          >
            <h3 className="vertical-timeline-element-title">Back-end Developer</h3>
            <ul>
              <li>Designed and implemented APIs and server-side logic using Python, Node.js, and MongoDB.</li>
              <li>Secured web applications by integrating authentication and authorization systems.
              </li>
              <li>Developed efficient data handling strategies for optimized performance.
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="February 2022 - Present"
            iconStyle={{ background: '#9F79EE', color: '#fff' }}
            contentStyle={{ background: 'rgba(255, 255, 255, 0.08)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #9F79EE' }}
          >
            <h3 className="vertical-timeline-element-title">Custom ChatGPT Developer</h3>
            <ul>
              <li>Developed custom ChatGPT applications tailored to specific business requirements.
              </li>
              <li>Enhanced user interaction with AI-driven chatbots for customer support and engagement.
              </li>
              <li>Continuously trained and refined models to improve response accuracy and relevance.</li>
            </ul>
          </VerticalTimelineElement>
           <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="February 2022 - Present"
            iconStyle={{ background: '#9F79EE', color: '#fff' }}
            contentStyle={{ background: 'rgba(255, 255, 255, 0.08)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #9F79EE' }}
          >
            <h3 className="vertical-timeline-element-title">MEAN Stack Developer</h3>
            <ul>
              <li>Developed full-stack web applications using MongoDB for database management, Express.js for server-side logic, Angular for dynamic front-end interfaces, and Node.js for backend functionality.</li>
              <li>Created RESTful APIs and integrated them into Angular applications to provide seamless user experiences.</li>
              
              <li>mplemented advanced features such as real-time data updates using WebSockets and authentication with JWT (JSON Web Tokens).</li>
              <li>Utilized MongoDB's flexible schema design to handle large volumes of data and optimize performance.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Timeline;
