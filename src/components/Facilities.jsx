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
  Sparkles
} from 'lucide-react';

const iconMap = {
  Wifi,
  Utensils,
  Car,
  ShieldCheck,
  Shirt,
  Coffee,
  Key,
  Droplets
};

export default function Facilities({ kost }) {
  const isRose = kost?.temaWarna === 'rose';

  return (
    <section id="fasilitas" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
            isRose ? 'bg-rose-50 text-rose-700' : 'bg-emerald-50 text-emerald-700'
          }`}>
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kenyamanan Ekstra</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Fasilitas Bersama Lengkap
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Disediakan untuk kemudahan beraktivitas sehari-hari tanpa biaya tersembunyi.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {kost.fasilitasUmum.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={index}
                className={`group p-5 rounded-2xl bg-gray-50/70 border border-gray-100 transition-all duration-300 ${
                  isRose ? 'hover:border-rose-200 hover:bg-rose-50/20' : 'hover:border-emerald-200 hover:bg-emerald-50/30'
                }`}
              >
                <div className={`w-11 h-11 rounded-xl bg-white border border-gray-200/60 shadow-xs flex items-center justify-center transition-all group-hover:scale-110 ${
                  isRose 
                    ? 'text-rose-600 group-hover:bg-rose-600 group-hover:text-white' 
                    : 'text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white'
                }`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="mt-4 font-bold text-gray-900 text-sm sm:text-base">
                  {item.nama}
                </h3>
                <p className="mt-1 text-xs text-gray-500 leading-relaxed">
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
