import React from 'react';
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
  Wind,
  CheckCircle2,
  Tv,
  Flame,
  Refrigerator
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
  Wind,
  CheckCircle2,
  Tv,
  Flame,
  Refrigerator
};

export default function Facilities({ kost }) {
  const fasilitas = kost.fasilitasUmum || [];

  return (
    <section id="fasilitas" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200/60">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fasilitas Lengkap & Nyaman</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Fasilitas Bersama Siap Pakai Tanpa Biaya Tambahan
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Semua fasilitas dirawat rutin demi menunjang kenyamanan istirahat, belajar, dan aktivitas harian penghuni putri.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fasilitas.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={index}
                className="group p-6 rounded-3xl bg-slate-50/70 hover:bg-white border border-slate-200/70 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 group-hover:scale-105">
                  <IconComponent className="w-6 h-6" />
                </div>
                
                <h3 className="mt-5 font-extrabold text-slate-900 text-base sm:text-lg">
                  {item.nama}
                </h3>
                
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
