
import React from 'react';
import { motion } from 'framer-motion';
import { Palette, CodeXml, Server, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: Palette,
    title: 'Web Design (UI/UX)',
    description: 'We ontwerpen intuïtieve en visueel verbluffende interfaces die uw merkidentiteit versterken en gebruikers boeien.',
  },
  {
    icon: CodeXml,
    title: 'Web Development',
    description: 'Met de nieuwste technologieën bouwen we snelle, schaalbare en robuuste websites die perfect presteren op elk apparaat.',
  },
  {
    icon: Server,
    title: 'Hosting & Onderhoud',
    description: 'Zorgeloze, veilige en snelle hosting. Wij zorgen voor het technische onderhoud, zodat u zich kunt focussen op uw business.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#20382f]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Onze Expertise</h2>
          <p className="mt-4 text-lg text-stone-300 max-w-2xl mx-auto">
            Wij bieden een compleet pakket om uw online aanwezigheid te realiseren en te laten excelleren.
          </p>
        </motion.div>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.li
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#1a2e28] border-stone-700/50 h-full text-center hover:border-amber-400/50 hover:-translate-y-2 transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-amber-900/20">
                    <service.icon className="w-8 h-8 text-amber-400" />
                  </div>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-400">{service.description}</p>
                </CardContent>
              </Card>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-[#1a2e28] rounded-xl p-8 lg:p-12 border border-stone-700/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Maatwerk Oplossingen</h3>
            <p className="text-stone-300 mb-6 max-w-2xl mx-auto">
              Elk bedrijf is uniek. Daarom geloven we niet in one-size-fits-all. We duiken diep in uw specifieke behoeften om een oplossing te bouwen die naadloos aansluit op uw doelen.
            </p>
            <ul className="grid grid-cols-2 gap-4 text-left max-w-md mx-auto">
              {['Complexe integraties', 'Unieke functionaliteiten', 'API-koppelingen', 'Performance optimalisatie'].map(item => (
                <li key={item} className="flex items-center gap-2 text-stone-300">
                  <CheckCircle className="w-5 h-5 text-amber-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
