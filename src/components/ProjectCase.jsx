
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ProjectCase({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="bg-[#20382f] border-stone-700/50 rounded-xl overflow-hidden h-full flex flex-col">
        <div className="overflow-hidden">
          <img
            src={project.image_url || `https://images.unsplash.com/photo-1559028006-44a36f1153d5?&fit=crop&w=600&h=400`}
            alt={project.title}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <CardContent className="p-6 flex-grow flex flex-col">
          <p className="text-sm text-amber-400 font-medium mb-1">{project.client_name}</p>
          <h3 className="text-xl font-bold text-white mb-3 flex-grow">{project.title}</h3>
          <p className="text-stone-400 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {project.services?.map((service) => (
              <Badge key={service} variant="secondary" className="bg-stone-700 text-stone-300 border-0">
                {service}
              </Badge>
            ))}
          </div>
          {project.website_url && (
            <Button asChild variant="outline" className="border-stone-600 hover:bg-stone-700 hover:text-white w-full">
              <a href={project.website_url} target="_blank" rel="noopener noreferrer">
                Bekijk Website <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.article>
  );
}
