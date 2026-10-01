import React from 'react';
import {
  MapPin,
  Compass,
  FileCheck2,
  ExternalLink,
  GraduationCap,
  Train,
  ShoppingBag,
  UtensilsCrossed,
  HeartPulse,
  School,
  BookOpen
} from 'lucide-react';

const iconLocationMap = {
  GraduationCap,
  Train,
  ShoppingBag,
  UtensilsCrossed,
  HeartPulse,
  Compass,
  School,
  BookOpen
};

export default function LocationRules({ kost }) {
  const isRose = kost?.temaWarna === 'rose';

  return (
    <section id="lokasi" className="py-16 md:py-24 bg-gray-50/60 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Lokasi & Akses Sekitar (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                isRose ? 'bg-rose-50 text-rose-700' : 'bg-emerald-50 text-emerald-700'
              }`}>
                <Compass className="w-3.5 h-3.5" />
                <span>Aksesibilitas Tinggi</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                Lokasi Strategis & Dekat Fasilitas Kampus
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Akses mudah menuju kampus dan pusat aktivitas harian tanpa macet. Aman dan nyaman dijangkau transportasi umum atau ojek online.
              </p>
            </div>

            {/* List of nearby spots */}
            <div className="space-y-3">
              {kost.lokasiTerdekat.map((item, index) => {
                const IconComponent = iconLocationMap[item.icon] || MapPin;
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3.5 bg-white rounded-2xl border border-gray-100 shadow-2xs hover:border-gray-300 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isRose ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-emerald-600'
                      }`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-xs sm:text-sm text-gray-800">
                        {item.nama}
                      </span>
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${
                      isRose ? 'text-rose-700 bg-rose-50' : 'text-emerald-700 bg-emerald-50'
                    }`}>
                      {item.jarak}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Google Maps Card */}
            <div className="p-4 sm:p-5 bg-white rounded-2xl border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  isRose ? 'bg-rose-50 text-rose-600' : 'bg-teal-50 text-teal-600'
                }`}>
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Alamat Lengkap:</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{kost.alamat}</p>
                </div>
              </div>
              <a
                href={kost.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gray-900 text-white text-xs font-semibold hover:bg-gray-800 active:scale-95 transition-all shrink-0"
              >
                <span>Buka di Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Peraturan Kos (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold">
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>Tata Tertib & Ketertiban</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900">
                Peraturan & Tata Tertib Penghuni
              </h3>

              <p className="text-xs text-gray-500 leading-relaxed">
                Dibuat untuk menjaga ketenteraman, kenyamanan belajar, dan privasi sesama penghuni:
              </p>

              <div className="space-y-3 pt-2">
                {kost.peraturan.map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-gray-700">
                    <span className={`w-5 h-5 rounded-full font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5 ${
                      isRose ? 'bg-rose-50 text-rose-700' : 'bg-emerald-50 text-emerald-700'
                    }`}>
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{rule}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Note box */}
            <div className="mt-6 pt-4 border-t border-gray-100 text-[11px] text-gray-500 italic">
              * Tata tertib lengkap diberikan saat serah terima kunci kamar dan tanda tangan kontrak.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
