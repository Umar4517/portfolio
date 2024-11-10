import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaWhatsapp, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.webp';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-theme-dark bg-opacity-70 backdrop-blur-md shadow-custom-purple' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-12 rounded-full" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`text-white text-2xl p-2 rounded-md transition-shadow duration-300 ${isMenuOpen ? 'shadow-none' : 'shadow-md shadow-cyan-400'}`}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links - Hidden on Mobile */}
        <nav className="hidden md:flex space-x-8 items-center text-white font-semibold">
  <a href="#about" className="hover:text-[#e884fc] transition duration-200">About Me</a>
  <a href="#skills" className="hover:text-[#e884fc] transition duration-200">Skills</a>
  <a href="#projects" className="hover:text-[#e884fc] transition duration-200">Projects</a>
  <a href="#works" className="hover:text-[#e884fc] transition duration-200">Work Experience</a>
</nav>



        {/* Social Icons - Hidden on Mobile */}
        <div className="hidden md:flex space-x-4 text-white">
          <a href="https://www.linkedin.com/in/umar-farooq-615b59334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-[#e884fc] transition-transform transform hover:scale-110" />
          </a>
          <a href="https://wa.me/qr/HIOJVPHHGOUYN1" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-xl hover:text-[#e884fc] transition-transform transform hover:scale-110" />
          </a>
          <a href="https://www.instagram.com/umarpatric/profilecard/?igsh=aGd4NXF2aDA5b24w" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl hover:text-[#e884fc] transition-transform transform hover:scale-110" />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-theme-dark bg-opacity-90 shadow-lg backdrop-blur-md">
          <nav className="flex flex-col items-center space-y-4 py-4 text-white font-semibold">
            <a href="#about" className="hover:text-[#e884fc]" onClick={toggleMenu}>About Me</a>
            <a href="#skills" className="hover:text-[#e884fc]" onClick={toggleMenu}>Skills</a>
            <a href="#projects" className="hover:text-[#e884fc]" onClick={toggleMenu}>Projects</a>
            <a href="#works" className="hover:text-[#e884fc]" onClick={toggleMenu}>Work Experience</a>

            {/* Social Icons in Mobile Menu */}
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/umar-farooq-615b59334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-xl hover:text-[#e884fc] transition-transform transform hover:scale-110" />
              </a>
              <a href="https://wa.me/qr/HIOJVPHHGOUYN1" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-xl hover:text-[#e884fc] transition-transform transform hover:scale-110" />
              </a>
              <a href="https://www.instagram.com/umarpatric/profilecard/?igsh=aGd4NXF2aDA5b24w" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-xl hover:text-[#e884fc] transition-transform transform hover:scale-110" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
