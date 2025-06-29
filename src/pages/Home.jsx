import React from 'react';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import Services from '../components/Services';
import Process from '../components/Process';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  React.useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <>
      <Hero />
      <Clients />
      <Services />
      <Process />
      <Projects />
      <Contact />
    </>
  );
}