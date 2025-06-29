
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#1a2e28]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Start Vandaag Nog Uw Project</h2>
          <p className="mt-4 text-lg text-stone-300 max-w-2xl mx-auto">
            Heeft u een idee? Laten we het samen werkelijkheid maken. Neem contact op voor een vrijblijvend gesprek.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#20382f] p-8 rounded-xl border border-stone-700/50"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Stuur ons een bericht</h3>
            <form className="space-y-6">
              <Input placeholder="Uw Naam" className="bg-[#1a2e28] border-stone-600/50 focus:border-amber-400 focus:ring-amber-400" />
              <Input type="email" placeholder="Uw Emailadres" className="bg-[#1a2e28] border-stone-600/50 focus:border-amber-400 focus:ring-amber-400" />
              <Textarea placeholder="Vertel ons over uw project..." rows={5} className="bg-[#1a2e28] border-stone-600/50 focus:border-amber-400 focus:ring-amber-400" />
              <Button type="submit" size="lg" className="w-full bg-stone-200 hover:bg-white text-stone-900">
                <Send className="w-5 h-5 mr-2" /> Bericht Versturen
              </Button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="pt-8" // Removed space-y-6 from here, applied to ul below for semantic correctness
          >
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Mail className="w-6 h-6 text-amber-400 mt-1" />
                <div>
                  <h4 className="text-lg text-white font-semibold">Email</h4>
                  <a href="mailto:contact@rosettadev.nl" className="text-stone-400 hover:text-amber-400">contact@rosettadev.nl</a>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="w-6 h-6 text-amber-400 mt-1" />
                <div>
                  <h4 className="text-lg text-white font-semibold">Telefoon</h4>
                  <a href="tel:+31612345678" className="text-stone-400 hover:text-amber-400">+31 6 123 456 78</a>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="w-6 h-6 text-amber-400 mt-1" />
                <div>
                  <h4 className="text-lg text-white font-semibold">Kantoor</h4>
                  <p className="text-stone-400">Amsterdam, Nederland</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
