import { motion } from 'motion/react';

export default function Hero() {
  const letters = "PORTFOLIO".split("");

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[600px] h-[400px] bg-blue-600 opacity-80 blur-3xl clip-path-blob"
        />
        <motion.div 
          animate={{ 
            rotate: [0, -10, 10, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute w-[500px] h-[500px] bg-red-600 opacity-60 blur-3xl clip-path-star translate-x-20 -translate-y-20"
        />
        <motion.div 
          animate={{ 
            rotate: [0, 15, -15, 0],
            scale: [1, 0.8, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute w-[700px] h-[300px] bg-yellow-500 opacity-40 blur-3xl -translate-x-40 translate-y-20"
        />
      </div>

      {/* Main Title */}
      <div className="relative z-10 w-full px-6 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8">
          <div className="absolute -top-12 left-0 w-1 h-32 bg-blue-500 hidden md:block"></div>
          <h1 className="text-[15vw] md:text-[140px] leading-[0.8] font-black uppercase italic tracking-tighter flex flex-col">
            <motion.span 
               initial={{ x: -100, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Port
            </motion.span>
            <motion.span 
               initial={{ x: -100, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
               className="text-yellow-400"
            >
              folio
            </motion.span>
          </h1>
          
          <div className="mt-8 flex flex-col md:flex-row items-start gap-6">
            <motion.div 
               initial={{ rotate: 10, opacity: 0 }}
               animate={{ rotate: -2, opacity: 1 }}
               transition={{ delay: 1 }}
               className="bg-white text-black p-2 transform -rotate-2 shadow-lg"
            >
              <p className="text-sm font-black uppercase leading-tight px-1 italic">Visual Designer & Storyteller</p>
            </motion.div>
            <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 0.8 }}
               transition={{ delay: 1.2 }}
               className="text-lg max-w-xs leading-relaxed font-medium opacity-80"
            >
              Exploring the intersection of brutalist geometry and expressive handmade textures. Based in the digital ether.
            </motion.p>
          </div>

          <div className="mt-12 opacity-40">
            <svg width="140" height="40" viewBox="0 0 140 40" className="fill-none stroke-blue-400 stroke-2">
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.5 }}
                d="M10,20 Q40,5 70,20 T130,20" 
                strokeDasharray="4,2" 
              />
            </svg>
          </div>
        </div>

        <div className="md:col-span-4 hidden md:flex flex-col gap-4 relative">
           <motion.div 
             initial={{ scale: 0, rotate: 20 }}
             animate={{ scale: 1, rotate: 5 }}
             transition={{ delay: 0.5, type: "spring" }}
             className="w-full aspect-square bg-zinc-900 border-4 border-white shadow-2xl relative overflow-hidden"
           >
              <div className="absolute inset-0 bg-red-600 opacity-40 mix-blend-multiply transition-all group-hover:opacity-20"></div>
              <div className="absolute bottom-2 left-2 right-2 bg-black p-2">
                <p className="text-[10px] uppercase font-bold tracking-widest text-white">Visual identity / Studio</p>
              </div>
           </motion.div>
           <motion.div 
             initial={{ scale: 0, rotate: -10 }}
             animate={{ scale: 1, rotate: -3 }}
             transition={{ delay: 0.7, type: "spring" }}
             className="w-4/5 aspect-square bg-zinc-900 border-4 border-yellow-400 shadow-2xl translate-x-12 -translate-y-20 relative overflow-hidden"
           >
              <div className="absolute inset-0 bg-blue-600 opacity-40 mix-blend-multiply transition-all group-hover:opacity-20"></div>
              <div className="absolute bottom-2 left-2 right-2 bg-black p-2">
                <p className="text-[10px] uppercase font-bold tracking-widest text-white">Experimental / Type</p>
              </div>
           </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-30"
      >
        <div className="w-[1px] h-12 bg-white" />
      </motion.div>
    </section>
  );
}
