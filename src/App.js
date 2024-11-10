import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

import Features from './components/Features';
import Overview from './components/Overview';


import  Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';



import Footer from './components/Footer';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Overview />
     
     
      <Timeline />
      <Skills />
      <Projects />
      <Testimonials />
    
    
      <Footer />
    </div>
  );
}

export default App;
