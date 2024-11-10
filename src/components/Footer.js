import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Footer.css';
import Particles from './Particles';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';  // Import FontAwesome icons

function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('Submitting form...');  // Debugging to see if form submission is triggered

    emailjs
      .sendForm('service_gn5q44d', 'template_1rckt2o', form.current, 'vd-zi7ISMnv9P2y4O')
      .then(
        () => {
          console.log('SUCCESS!');
          alert("message sent!");
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <footer id="contact">
      <Particles />  {/* Add Particles component to create the background effect */}
      <h3>Contact Us</h3>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
       <button type="submit" value="Send" >Send</button>
      </form>
      <div className="footer-social">
        <a href="https://wa.me/qr/HIOJVPHHGOUYN1"target="_blank" rel="noopener noreferrer"><FaWhatsapp  size={30} /></a>
        <a href="https://www.linkedin.com/in/umar-farooq-615b59334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
      </div>
      <p>&copy; 2024 Web4U. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
