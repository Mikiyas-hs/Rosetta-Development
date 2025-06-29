import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#20382f] border-t border-stone-700/50">
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
             <a href="#" className="flex items-center gap-3">
              <span className="text-xl font-semibold text-white tracking-wider">
                Rosetta Development
              </span>
            </a>
            <p className="text-stone-400 text-base">
              Digitale ervaringen bouwen die groeien en inspireren.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-stone-400 hover:text-amber-400">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-400">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-400">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            {/* Navigation can be added here if needed */}
          </div>
        </div>
        <div className="mt-12 border-t border-stone-700/50 pt-8">
          <p className="text-base text-stone-400 text-center">
            &copy; 2024 Rosetta Development. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}