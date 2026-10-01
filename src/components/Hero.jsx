import React from 'react';
import { buatLinkWa } from '../data/kostData';
import { Star, ShieldCheck, MapPin, ArrowRight, MessageSquareCheck, Sparkles } from 'lucide-react';

export default function Hero({ kost }) {
  const isRose = kost.temaWarna === 'rose';

  return (
    <section className={`relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 ${
      isRose 
        ? 'bg-gradient-to-b from-rose-50/60 via-pink-50/20 to-white' 
        : 'bg-gradient-to-b from-emerald-50/50 via-white to-white'
    }`}>
      {/* Background Glows */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 blur-3xl -z-10 pointer-events-none ${
        isRose ? 'bg-gradient-to-tr from-rose-200/30 to-pink-100/30' : 'bg-gradient-to-tr from-emerald-200/30 to-teal-100/30'
      }`} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Rating & Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-xs text-xs font-medium text-gray-700">
              <span className="flex items-center text-amber-500">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="ml-1 font-bold">{kost.rating}</span>
              </span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-600">{kost.totalUlasan} Ulasan Penghuni</span>
              <span className="text-gray-300">|</span>
              <span className={`font-semibold flex items-center gap-1 ${
                isRose ? 'text-rose-600' : 'text-emerald-700'
              }`}>
                <Sparkles className="w-3 h-3" /> Rekomendasi
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.18]">
              {kost.tagline}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Didesain khusus untuk memberikan rasa aman, ketenangan belajar, dan kenyamanan istirahat maksimal dengan sistem keamanan terkontrol dan lingkungan yang bersih.
            </p>

            {/* Quick Location Chip */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-600">
              <MapPin className={`w-4 h-4 shrink-0 ${isRose ? 'text-rose-600' : 'text-emerald-600'}`} />
              <span className="line-clamp-1">{kost.alamat}</span>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#kamar"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-white font-semibold text-base active:scale-98 shadow-lg transition-all ${
                  isRose 
                    ? 'bg-rose-600 hover:bg-rose-700 shadow-rose-600/25' 
                    : 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/25'
                }`}
              >
                <span>Lihat Kamar & Biaya</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={buatLinkWa(kost.whatsapp, kost.nama)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-gray-800 font-semibold text-base border border-gray-200 shadow-xs hover:bg-gray-50 active:scale-98 transition-all"
              >
                <MessageSquareCheck className={`w-5 h-5 ${isRose ? 'text-rose-600' : 'text-emerald-600'}`} />
                <span>Jadwal Survei Lokasi</span>
              </a>
            </div>

            {/* Quick Highlight Stats Pill */}
            <div className="pt-6 grid grid-cols-3 gap-3 border-t border-gray-100 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="text-xl sm:text-2xl font-bold text-gray-900">{kost.stats.jarakKampus}</p>
                <p className="text-xs text-gray-500 font-medium">Sangat Strategis</p>
              </div>
              <div className="text-center lg:text-left">
                <p className={`text-xl sm:text-2xl font-bold ${isRose ? 'text-rose-600' : 'text-emerald-600'}`}>
                  {kost.stats.kamarTersedia} Kamar
                </p>
                <p className="text-xs text-gray-500 font-medium">Sisa Tersedia</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-xl sm:text-2xl font-bold text-gray-900">{kost.stats.kecepatanWifi}</p>
                <p className="text-xs text-gray-500 font-medium">Internet Dedicated</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Image with Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3 sm:aspect-5/4">
                <img
                  src={kost.kamar[0]?.gambarUtama || "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&auto=format&fit=crop"}
                  alt={kost.nama}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                
                {/* Image caption on bottom */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full text-white mb-1 ${
                    isRose ? 'bg-rose-500' : 'bg-emerald-500'
                  }`}>
                    Khusus Mahasiswi & Putri
                  </span>
                  <p className="text-sm font-medium text-gray-100">
                    Lingkungan sopan, tenang, bersih, & siap huni.
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Price Tag */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white p-3.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                  isRose ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-emerald-600'
                }`}>
                  Rp
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Sewa Bulanan Mulai</p>
                  <p className="text-sm font-bold text-gray-900">
                    {Math.min(...kost.kamar.map(k => k.hargaBulan)) / 1000} Ribu <span className="text-xs font-normal text-gray-500">/bln</span>
                  </p>
                </div>
              </div>

              {/* Floating Badge 2: Security & Key */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isRose ? 'bg-rose-50 text-rose-600' : 'bg-teal-50 text-teal-600'
                }`}>
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Aman & Terkontrol</p>
                  <p className="text-[11px] text-gray-500 font-medium">CCTV & Bebas Orang Luar</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
