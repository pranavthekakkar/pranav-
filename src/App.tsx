/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import ProjectModal from './components/ProjectModal';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-grain min-h-screen selection:bg-yellow-400 selection:text-black">
      <AnimatePresence>
        {isLoading ? (
          <motion.div 
            key="loader"
            exit={{ y: '-100%' }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[999] bg-yellow-400 flex flex-col items-center justify-center p-6 text-black"
          >
            <motion.h1 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-8xl md:text-[15vw] font-display font-black uppercase tracking-tighter leading-none text-center"
            >
              LOADING <br/> <span className="italic text-stroke" style={{ WebkitTextStrokeColor: 'black' }}>PORTFOLIO</span>
            </motion.h1>
            <div className="mt-12 w-full max-w-md h-2 border-2 border-black relative overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: '100%' }}
                 transition={{ duration: 1.5, ease: "easeInOut" }}
                 className="absolute inset-0 bg-black"
               />
            </div>
            <p className="mt-4 font-marker text-2xl rotate-[-5deg]">Hang tight!</p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <Hero />
          <ProjectGrid onSelectProject={setSelectedProject} />
          <About />
          <Contact />
          <Footer />
          
          <AnimatePresence>
            {selectedProject && (
              <ProjectModal 
                project={selectedProject} 
                onClose={() => setSelectedProject(null)} 
              />
            )}
          </AnimatePresence>

          {/* Global Scribbles/Textures Background elements */}
          <div className="fixed inset-0 pointer-events-none z-[-1]">
             {/* Large background text */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none">
                <span className="text-[25vw] font-black leading-none text-white whitespace-nowrap">RAW / ED.</span>
             </div>

             {/* Blurry accent shapes */}
             <div className="absolute -top-20 -left-20 w-[40vw] h-[40vw] bg-red-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
             <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-yellow-400 opacity-10 transform rotate-45 blur-2xl"></div>
             <div className="absolute bottom-10 right-10 w-[30vw] h-[30vw] bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
