import { motion } from 'motion/react';

export default function Navbar() {
  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="pointer-events-auto"
      >
        <a href="/" className="font-display font-black text-2xl uppercase tracking-tighter leading-none border-b-4 border-yellow-400">
          TEGAR / SEPTIADY
        </a>
      </motion.div>
      
      <motion.ul 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex gap-8 pointer-events-auto text-xs font-bold uppercase tracking-widest"
      >
        {navItems.map((item, idx) => (
          <li key={item.label}>
            <a 
              href={item.href} 
              className={`transition-colors ${idx === 0 ? 'hover:text-yellow-400' : idx === 1 ? 'hover:text-red-500' : 'hover:text-blue-500'}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </motion.ul>
    </nav>
  );
}
