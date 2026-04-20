import { motion } from 'motion/react';
import { Project } from '../types';
import { PROJECTS } from '../data';

interface ProjectGridProps {
  onSelectProject: (project: Project) => void;
}

export default function ProjectGrid({ onSelectProject }: ProjectGridProps) {
  return (
    <section id="work" className="py-24 px-6 max-w-screen-2xl mx-auto">
      <div className="flex justify-between items-baseline mb-16 px-4">
        <h2 className="text-7xl md:text-9xl font-display font-black uppercase leading-none tracking-tighter italic">
          Selected <br/> <span className="text-stroke">Works</span>
        </h2>
        <div className="hidden md:block max-w-sm">
          <p className="text-xl font-display leading-tight opacity-70">
            A COLLECTION OF VISUAL STORIES, BRAND IDENTITIES, AND EXPERIMENTAL DESIGN SYSTEMS.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-20">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50, rotate: idx % 2 === 0 ? 3 : -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: idx % 2 === 0 ? 1 : -1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.02, rotate: 0 }}
            className={`
              relative group cursor-pointer shadow-2xl transition-all duration-500
              border-4 ${idx % 3 === 0 ? 'border-white' : idx % 3 === 1 ? 'border-yellow-400' : 'border-blue-500'}
              ${idx % 5 === 0 ? 'lg:col-span-8 aspect-[16/9]' : idx % 5 === 1 ? 'lg:col-span-4 aspect-[4/5] translate-y-12' : idx % 5 === 2 ? 'lg:col-span-5 aspect-square -translate-x-4' : idx % 5 === 3 ? 'lg:col-span-7 aspect-[16/10] translate-y-8' : 'lg:col-span-12 aspect-[21/9]'}
            `}
            onClick={() => onSelectProject(project)}
          >
            {/* Background Color Overlay */}
            <div 
              className="absolute inset-0 z-10 opacity-30 mix-blend-multiply transition-all duration-500 group-hover:opacity-10"
              style={{ backgroundColor: project.color }}
            />
            
            {/* Image */}
            <img 
              src={project.thumbnail} 
              alt={project.title}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />

            {/* Label */}
            <div className="absolute bottom-2 left-2 right-2 z-20 bg-black p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
              <p className="text-[10px] uppercase font-bold tracking-widest text-white">
                {project.category} · {project.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
