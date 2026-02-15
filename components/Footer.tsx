
import React from 'react';
import { Landmark, Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <Landmark className="w-10 h-10 text-brand-gold" />
              <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tighter uppercase leading-none">Terra Aditama</span>
                <span className="text-xs text-brand-gold font-bold tracking-[0.3em] uppercase">Marcapada</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Solusi profesional yang didukung oleh teknologi canggih dan inovasi berkelanjutan untuk tantangan pembangunan modern di seluruh Indonesia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all"><Linkedin size={20} /></a>
              <a href="#" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all"><Instagram size={20} /></a>
              <a href="#" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-brand-gold text-sm mb-8">Navigasi Cepat</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-bold uppercase tracking-wider">
              <li><a href="#home" className="hover:text-brand-gold transition-colors">Beranda</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Layanan Teknik</a></li>
              <li><a href="#portfolio" className="hover:text-brand-gold transition-colors">Portfolio</a></li>
              <li><a href="#gallery" className="hover:text-brand-gold transition-colors">Galeri Dokumentasi</a></li>
              <li><a href="#about" className="hover:text-brand-gold transition-colors">Tentang Kami</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-brand-gold text-sm mb-8">Layanan Ahli</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-bold uppercase tracking-wider">
              <li>Survey & Pemetaan</li>
              <li>Studi Kelayakan</li>
              <li>Pengembangan Wilayah</li>
              <li>DED & Pengawasan</li>
              <li>Litbang Teknologi</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-brand-gold text-sm mb-8">Hubungi Kami</h4>
            <ul className="space-y-6 text-slate-400 text-sm">
              <li className="flex items-start space-x-4">
                <MapPin size={20} className="text-brand-gold flex-shrink-0" />
                <span className="leading-relaxed">Jl. Haur Jaya V No. 1A, RT.01/RW.07, Bogor, Jawa Barat 16162</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone size={20} className="text-brand-gold" />
                <span>+62 21 5555 8888</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail size={20} className="text-brand-gold" />
                <span>info@tamahaurjaya.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
          <p>© 2024 PT Terra Aditama Marcapada. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
