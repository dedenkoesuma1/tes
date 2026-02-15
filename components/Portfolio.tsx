
import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const projects = [
  {
    category: "TOPOGRAFI",
    title: "Pemetaan Kontur Lahan Perkebunan",
    location: "Kab. Bogor, Jawa Barat",
    desc: "Survey topografi detail seluas 50 Hektar untuk perencanaan drainase perkebunan sawit.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    category: "UAV / DRONE",
    title: "Pemotretan Udara Kawasan Industri",
    location: "Cikarang, Jawa Barat",
    desc: "Akuisisi data foto udara resolusi tinggi untuk pembaruan peta situasi kawasan industri.",
    image: "https://images.unsplash.com/photo-1473960104373-8bc71c3fe201?auto=format&fit=crop&q=80&w=800"
  },
  {
    category: "WEBGIS",
    title: "Sistem Informasi Tata Ruang Desa",
    location: "Kab. Cianjur, Jawa Barat",
    desc: "Pembuatan aplikasi WebGIS untuk inventarisasi aset desa dan batas administrasi.",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800"
  },
  {
    category: "KADASTRAL",
    title: "Pengukuran Batas Lahan Fasilitas Umum",
    location: "Tangerang, Banten",
    desc: "Pengukuran kadastral presisi untuk legalitas lahan pembangunan infrastruktur publik.",
    image: "https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80&w=800"
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-brand-navy uppercase font-serif mb-4">Layanan Unggulan</h2>
          <div className="w-24 h-1.5 bg-brand-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-brand-navy/10 transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#facc15] text-brand-navy text-[10px] font-black px-4 py-1.5 rounded-lg tracking-widest">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h4 className="text-lg font-black text-brand-navy mb-3 leading-tight group-hover:text-brand-gold transition-colors">
                  {project.title}
                </h4>
                
                <div className="flex items-center text-slate-400 text-xs font-bold mb-5">
                  <MapPin size={14} className="mr-1.5 text-brand-gold" />
                  {project.location}
                </div>
                
                <p className="text-sm text-slate-500 leading-relaxed mb-8 h-12 overflow-hidden line-clamp-2">
                  {project.desc}
                </p>
                
                <button className="flex items-center text-brand-gold font-black text-[10px] uppercase tracking-[0.2em] group/btn">
                  Lihat Detail Proyek 
                  <ArrowRight size={14} className="ml-2 transition-transform group-hover/btn:translate-x-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
