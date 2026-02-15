
import React, { useState } from 'react';
import { Menu, X, Landmark } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Beranda', href: '#home' },
    { name: 'Layanan', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'Tentang', href: '#about' },
    { name: 'AI Consultant', href: '#ai-consultant' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 glass-dark border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-2">
            <Landmark className="w-8 h-8 text-brand-gold" />
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tighter text-white uppercase">Terra Aditama</span>
              <span className="text-[10px] text-brand-gold font-bold tracking-[0.3em] -mt-1 uppercase">Marcapada</span>
            </div>
          </div>
          
          <div className="hidden lg:flex space-x-8">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-white/60 hover:text-brand-gold font-black uppercase tracking-widest text-[10px] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-brand-navy border-t border-white/5 p-8 space-y-6">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="block text-white/60 hover:text-brand-gold font-black uppercase tracking-widest text-xs"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
