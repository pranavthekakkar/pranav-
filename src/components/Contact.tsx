import { motion } from 'motion/react';
import { Mail, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-40 px-6 relative overflow-hidden bg-white text-black">
      <div className="absolute top-0 left-0 w-full h-8 bg-black" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }} />
      
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-8xl md:text-[12vw] font-display font-black leading-[0.75] uppercase tracking-tighter mb-8"
          >
            LET'S <br/> <span className="text-stroke" style={{ WebkitTextStrokeColor: 'black' }}>BUILD</span> <br/> IT.
          </motion.h2>
          <p className="text-xl font-display uppercase tracking-tight opacity-70 mb-12">
            HAVE A PROJECT IN MIND? OR JUST WANT TO SAY HI? <br/> DON'T BE A STRANGER.
          </p>
          
          <div className="flex gap-6">
            {[Instagram, Twitter, Linkedin, Mail].map((Icon, idx) => (
              <a 
                key={idx} 
                href="#" 
                className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all transform hover:-rotate-12"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        <div className="relative">
          <form className="space-y-8">
            <div className="relative group">
              <input type="text" placeholder="YOUR NAME" className="w-full bg-transparent border-b-2 border-black/20 p-4 font-display font-bold text-2xl uppercase focus:border-black outline-none transition-colors" />
            </div>
            <div className="relative group">
              <input type="email" placeholder="YOUR EMAIL" className="w-full bg-transparent border-b-2 border-black/20 p-4 font-display font-bold text-2xl uppercase focus:border-black outline-none transition-colors" />
            </div>
            <div className="relative group">
              <textarea rows={4} placeholder="THE PROJECT" className="w-full bg-transparent border-b-2 border-black/20 p-4 font-display font-bold text-2xl uppercase focus:border-black outline-none transition-colors resize-none" />
            </div>
            
            <button className="group flex items-center gap-4 bg-black text-white px-12 py-6 font-display font-black text-2xl uppercase tracking-tighter hover:bg-yellow-400 hover:text-black transition-colors transform-gpu active:scale-95">
              SEND MESSAGE
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
          
          {/* Scribble decor */}
          <div className="absolute -bottom-10 right-0 w-32 h-32 pointer-events-none opacity-20">
             <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="text-black">
                <path d="M10,50 Q25,25 40,50 T70,50 S85,75 100,50" />
                <path d="M20,60 Q35,35 50,60 T80,60" />
             </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
