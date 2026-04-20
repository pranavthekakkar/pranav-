import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black pointer-events-auto overflow-y-auto"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="fixed top-8 right-8 z-[110] w-14 h-14 bg-white text-black flex items-center justify-center rounded-full hover:rotate-90 transition-transform duration-500 shadow-xl"
          >
            <X size={32} />
          </button>

          <div className="w-full">
            {/* Header / Hero */}
            <header className="relative min-h-[70vh] flex flex-col justify-end p-6 md:p-20 overflow-hidden">
              <div 
                className="absolute inset-0 z-0 opacity-40 blur-2xl"
                style={{ backgroundColor: project.color }}
              />
              <img 
                src={project.thumbnail} 
                alt="" 
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
              />
              
              <div className="relative z-10 max-w-4xl">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-block px-4 py-1 bg-white text-black font-display font-bold text-xs uppercase tracking-widest mb-6"
                >
                  {project.category} · {project.year}
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-8xl md:text-[12vw] font-display font-black uppercase tracking-tighter leading-[0.8] mb-12"
                >
                  {project.title}
                </motion.h1>
              </div>
            </header>

            {/* Content */}
            <main className="px-6 md:px-20 py-24 bg-black">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                <div className="lg:col-span-5">
                  <p className="text-3xl md:text-5xl font-display leading-tight tracking-tight uppercase">
                    {project.description}
                  </p>
                  
                  <div className="mt-20 flex flex-wrap gap-4">
                    {['Concept', 'Creative Direction', 'Typography'].map(tag => (
                      <span key={tag} className="px-4 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest opacity-60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col gap-8 md:gap-16">
                  {project.images.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className={`
                        w-full overflow-hidden rounded-lg shadow-2xl
                        ${idx % 3 === 0 ? 'aspect-video' : idx % 3 === 1 ? 'aspect-[3/4]' : 'aspect-square'}
                      `}
                    >
                      <img 
                        src={img} 
                        alt={`${project.title} screenshot ${idx}`} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* End Section */}
              <footer className="mt-40 text-center">
                <button 
                  onClick={onClose}
                  className="group relative inline-flex items-center justify-center p-1 px-12 py-6 overflow-hidden font-display font-black text-6xl uppercase tracking-tighter hover:text-white"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-yellow-400 group-hover:opacity-100 group-hover:h-full -rotate-3" />
                  <span className="relative">Next Project?</span>
                </button>
              </footer>
            </main>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
