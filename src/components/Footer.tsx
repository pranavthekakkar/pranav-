export default function Footer() {
  return (
    <footer className="p-8 flex flex-col md:flex-row justify-between items-end bg-black text-white relative z-30 border-t border-zinc-800">
      <div className="flex flex-col space-y-2 mb-8 md:mb-0">
        <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-500">Selected Works / 2024</p>
        <p className="text-sm">Ready to create something loud? <a href="#contact" className="text-red-500 underline underline-offset-4 font-bold hover:text-yellow-400 transition-colors">Get in touch.</a></p>
      </div>

      <div className="flex items-center space-x-4">
        {[
          { label: 'IG', href: '#' },
          { label: 'TW', href: '#' },
          { label: 'BE', href: '#' }
        ].map((social) => (
          <div 
            key={social.label}
            className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer group"
          >
            <span className="text-[10px] font-bold group-hover:scale-110 transition-transform">{social.label}</span>
          </div>
        ))}
      </div>
    </footer>
  );
}
