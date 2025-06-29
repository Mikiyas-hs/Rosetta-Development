
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/api/entities';
import ProjectCase from './ProjectCase';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await Project.list();
        setProjects(data);
      } catch (error) {
        console.error("Error loading projects:", error);
      } finally {
        setLoading(false);
      }
    }
    loadProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-[#20382f]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Recente Projecten</h2>
          <p className="mt-4 text-lg text-stone-300 max-w-2xl mx-auto">
            Een selectie van op maat gemaakte oplossingen die we met trots hebben geleverd.
          </p>
        </motion.div>
        
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            [...Array(3)].map((_, i) => (
              <li key={i}>
                <div className="bg-stone-700/50 rounded-xl p-6 animate-pulse">
                  <div className="h-56 bg-stone-600/50 rounded-md mb-4"></div>
                  <div className="h-4 bg-stone-600/50 rounded w-1/3 mb-2"></div>
                  <div className="h-6 bg-stone-600/50 rounded w-3/4 mb-4"></div>
                  <div className="h-10 bg-stone-600/50 rounded w-full"></div>
                </div>
              </li>
            ))
          ) : (
            projects.map((project, index) => (
              <li key={project.id}>
                <ProjectCase project={project} index={index} />
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
}
