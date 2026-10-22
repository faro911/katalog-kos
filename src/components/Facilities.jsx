import React, { useState } from 'react';
import {
  Wifi,
  Utensils,
  Car,
  ShieldCheck,
  Shirt,
  Coffee,
  Key,
  Droplets,
  Sparkles,
  Building2,
  CheckCircle2,
  Tv,
  Wind
} from 'lucide-react';

const iconMap = {
  Wifi,
  Utensils,
  Car,
  ShieldCheck,
  Shirt,
  Coffee,
  Key,
  Droplets,
  Building2,
  CheckCircle2,
  Tv,
  Wind
};

export default function Facilities({ kost }) {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const fasilitas = kost.fasilitasUmum || [];

  const categories = ['Semua', 'Parkir & Mobilitas', 'Keamanan', 'Kenyamanan', 'Konektivitas', 'Layanan'];

  const filtered = fasilitas.filter((item) => {
    if (activeCategory === 'Semua') return true;
    return item.kategori === activeCategory;
  });

  return (
    <section id="fasilitas" className="py-16 md:py-24 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Fasilitas Standar Serviced Residence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            Fasilitas Hotel Bintang untuk Kenyamanan Anda
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Dikelola dengan standar profesional demi menjaga privasi, keamanan, dan mobilitas kerja penghuni eksekutif.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 font-black'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={index}
                className="group p-6 rounded-3xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-700 shadow-inner flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-amber-400" />
                    </div>
                    {item.kategori && (
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                        {item.kategori}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="mt-5 font-black text-white text-base sm:text-lg group-hover:text-amber-400 transition-colors">
                    {item.nama}
                  </h3>
                  
                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Termasuk Biaya Sewa</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
