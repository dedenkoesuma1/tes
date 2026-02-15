
import React, { useState } from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';

const categories = ["Semua", "Foto Udara (UAV)", "Survey Lapangan", "Kegiatan Tim"];

const galleryItems = [
  { title: "Pemetaan Drone", cat: "Foto Udara (UAV)", img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800" },
  { title: "Survey GPS", cat: "Survey Lapangan", img: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80&w=800" },
  { title: "Rapat Koordinasi", cat: "Kegiatan Tim", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" },
  { title: "Hasil Orthophoto", cat: "Foto Udara (UAV)", img: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" },
  { title: "Pengukuran Jalan", cat: "Survey Lapangan", img: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&q=80&w=800" },
  { title: "Presentasi Proyek", cat: "Kegiatan Tim", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" },
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState("Semua");

  const filteredItems = filter === "Semua" 
    ? galleryItems 
    : galleryItems.filter(item => item.cat === filter);

  return (
    <section id="gallery" className="py-0">
      <div className="bg-brand-navy py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase font-serif mb-6">Galeri Dokumentasi</h2>
          <p className="text-slate-400 text-lg font-light leading-relaxed">
            Rekam jejak aktivitas lapangan dan hasil pemetaan PT Terra Aditama Marcapada.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-32">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                filter === cat 
                  ? 'bg-brand-navy text-white shadow-xl shadow-brand-navy/30' 
                  : 'bg-white text-brand-navy border border-brand-navy hover:bg-brand-navy hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <div key={idx} className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg bg-white">
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex flex-col justify-end p-10">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">{item.cat}</span>
                  <h4 className="text-white text-2xl font-black uppercase">{item.title}</h4>
                  <div className="w-10 h-1 bg-brand-gold mt-4"></div>
                </div>
              </div>
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-white">
                  <ImageIcon size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
