import React from 'react';
import { motion } from 'framer-motion';

const clientLogos = [
  { name: 'Movactor Jeugd & Jongerenwerk', src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68aa87924_image.png' },
  { name: 'De Bibliotheek Nieuwegein', src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/4e3812c02_image.png' },
  { name: 'Aura Studios', src: null, isText: true },
  { name: 'QuantumLeap', src: null, isText: true },
  { name: 'Vertex Solutions', src: null, isText: true },
];

export default function Clients() {
  return (
    <section className="py-16 sm:py-24 bg-[#1a2e28]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-lg font-semibold leading-8 text-white mb-10">
            Vertrouwd door toonaangevende bedrijven en ambitieuze startups
          </h2>
          <ul className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {clientLogos.map((logo, index) => (
              <motion.li
                key={logo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="col-span-1 flex justify-center"
              >
                {logo.isText ? (
                  <span className="text-2xl font-thin text-stone-400 text-center tracking-widest">
                    {logo.name}
                  </span>
                ) : (
                  <img
                    className="max-h-20 w-auto object-contain"
                    src={logo.src}
                    alt={logo.name}
                  />
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}