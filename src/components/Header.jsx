import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Diensten', href: '#services' },
    { name: 'Projecten', href: '#projects' },
    { name: 'Werkwijze', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1a2e28]/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center gap-3">
            <span className="text-xl font-semibold text-white tracking-wider">
              Rosetta Development
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-300 hover:text-amber-400 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center">
            <Button
              asChild
              className="hidden md:inline-flex bg-stone-200 hover:bg-white text-stone-900 rounded-lg"
            >
              <a href="#contact">Start een Project</a>
            </Button>
            {/* Mobile Menu Trigger can be added here */}
          </div>
        </div>
      </div>
    </motion.header>
  );
}