import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1a2e28]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a2e28]"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-20"
          src="https://assets.mixkit.co/videos/preview/mixkit-liquid-bubbles-and-gray-fluid-44211-large.mp4"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin text-white leading-tight mb-6 tracking-wider">
            Exclusief Webdesign,
            <br />
            <span className="font-serif italic text-amber-400">Feilloos</span> Gerealiseerd.
          </h1>
          <p className="text-lg md:text-xl text-stone-300 max-w-3xl mx-auto mb-12">
            Rosetta Development creëert digitale meesterwerken die esthetiek en functionaliteit verenigen voor een onvergetelijke online aanwezigheid.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-stone-200 hover:bg-white text-stone-900 rounded-full text-base px-10 py-7">
              <a href="#projects">
                Ontdek Ons Werk
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-amber-400/50 text-amber-400 hover:bg-amber-400/10 hover:text-amber-300 rounded-full text-base px-10 py-7">
              <a href="#contact">Neem Contact Op</a>
            </Button>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-stone-400 animate-bounce" />
      </motion.div>
    </section>
  );
}