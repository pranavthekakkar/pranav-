import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-40 px-6 max-w-screen-xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
        <div className="md:col-span-7">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-8xl md:text-[10vw] font-display font-black uppercase leading-[0.8] mb-12 tracking-tighter"
          >
            Design is <br/> <span className="text-yellow-400">Messy.</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-xl space-y-6"
          >
            <p className="text-2xl md:text-3xl font-display leading-tight uppercase opacity-80">
              I AM A GRAPHIC DESIGNER WHO THRIVES IN THE SPACE BETWEEN THE CLEAN GRID AND THE CHAOTIC CUT. 
            </p>
            <p className="text-lg opacity-60">
              My work is inspired by the textures of city walls, the intentionality of Swiss design, and the raw energy of DIY culture. I believe every brand should feel like it has a human soul, not just a set of guidelines. Based in the digital ether, working with clients worldwide.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-12">
            {[
              { label: 'AWARDS', value: '3x Awwwards SOTD' },
              { label: 'EXPERIENCE', value: '6+ Years Creative' },
              { label: 'COFFEE', value: 'Infinite Consumption' },
              { label: 'PLANTS', value: 'Mostly Surviving' }
            ].map((stat, idx) => (
              <div key={idx}>
                <span className="text-[10px] tracking-[0.2em] opacity-40 uppercase block mb-1">{stat.label}</span>
                <span className="text-lg font-display font-bold uppercase">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-5 relative group">
          <motion.div 
            initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
            whileInView={{ rotate: 5, scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative z-10 aspect-[3/4] overflow-hidden rounded-xl border-4 border-white transform-gpu hover:rotate-0 transition-transform duration-700"
          >
            <img 
              src="https://picsum.photos/seed/tegar/1200/1600" 
              alt="Profile" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
          {/* Decorative shapes */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600 rounded-full blur-3xl opacity-40 z-0" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-600 rounded-full blur-3xl opacity-30 z-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-marker text-8xl text-yellow-400 -rotate-12 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            HELLO!
          </div>
        </div>
      </div>
    </section>
  );
}
