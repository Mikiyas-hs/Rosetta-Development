
import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

const processSteps = [
  {
    icon: Search,
    title: "01. Strategie & Concept",
    description: "We beginnen met een diepgaande analyse van uw doelen en doelgroep om een solide, datagedreven strategie te ontwikkelen.",
  },
  {
    icon: PenTool,
    title: "02. Design & UX",
    description: "Ons designteam creëert een visueel aantrekkelijk en gebruiksvriendelijk ontwerp dat uw merkverhaal perfect vertelt.",
  },
  {
    icon: Code,
    title: "03. Ontwikkeling & Testen",
    description: "Onze developers bouwen een schone, efficiënte en toekomstbestendige website, die we rigoureus testen op alle apparaten.",
  },
  {
    icon: Rocket,
    title: "04. Lancering & Support",
    description: "Na een vlekkeloze lancering bieden we doorlopende support en onderhoud om uw website optimaal te laten presteren.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-[#1a2e28]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Onze Werkwijze</h2>
          <p className="mt-4 text-lg text-stone-300 max-w-2xl mx-auto">
            Een gestroomlijnd proces voor gegarandeerd succes, van de eerste schets tot de uiteindelijke lancering.
          </p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-stone-700/30 hidden lg:block" aria-hidden="true"></div>
          <ol className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="lg:flex lg:items-center lg:gap-8"
              >
                <div className={`flex-1 lg:text-right ${index % 2 !== 0 ? 'lg:order-3' : ''}`}>
                  <h3 className="text-2xl font-bold text-amber-400 mb-2 font-serif italic">{step.title}</h3>
                  <p className="text-stone-400 max-w-md lg:ml-auto">{step.description}</p>
                </div>
                <div className="flex-shrink-0 my-4 lg:my-0 lg:mx-8">
                  <div className="w-16 h-16 mx-auto lg:mx-0 bg-[#20382f] border-2 border-amber-400/50 rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-amber-400" />
                  </div>
                </div>
                <div className="flex-1"></div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
