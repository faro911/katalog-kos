import React, { useState } from 'react';
import { buatLinkWa } from '../data/kostData';
import RoomCard from './RoomCard';
import { BedDouble, MessageCircle, Car } from 'lucide-react';

export default function RoomCatalog({ kost, onSelectRoom }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const kamarList = kost?.kamar || [];
  const filteredKamar = kamarList.filter((k) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'available') return k.status === 'Tersedia';
    return k.id === activeFilter || k.kategori === activeFilter;
  });

  return (
    <section id="kamar" className="py-16 md:py-24 bg-slate-900/60 border-t border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <BedDouble className="w-3.5 h-3.5 text-amber-400" />
            <span>Katalog Unit Eksklusif</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            Pilihan Tipe Kamar & Tarif Sewa
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Kamar fully furnished berkelas hotel, AC sejuk, kamar mandi dalam dengan water heater, Smart TV, dan meja kerja/belajar.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-lg shadow-amber-500/20 scale-102 font-black'
                : 'bg-slate-800/80 text-slate-300 border border-slate-700 hover:bg-slate-700 hover:text-white'
            }`}
          >
            Semua Tipe Kamar ({kamarList.length})
          </button>

          <button
            onClick={() => setActiveFilter('available')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeFilter === 'available'
                ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-lg shadow-amber-500/20 scale-102 font-black'
                : 'bg-slate-800/80 text-slate-300 border border-slate-700 hover:bg-slate-700 hover:text-white'
            }`}
          >
            Unit Tersedia ({kost?.stats?.kamarTersedia || 3} Kamar)
          </button>

          {kamarList.map((k) => (
            <button
              key={k.id}
              onClick={() => setActiveFilter(k.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === k.id
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-lg shadow-amber-500/20 scale-102 font-black'
                  : 'bg-slate-800/80 text-slate-300 border border-slate-700 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {k.tipeKamar || k.nama}
            </button>
          ))}
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredKamar.map((kamar) => (
            <RoomCard
              key={kamar.id}
              kamar={kamar}
              kost={kost}
              onOpenDetail={onSelectRoom}
            />
          ))}
        </div>

        {/* Quick Tips Box below Catalog */}
        <div className="mt-14 bg-gradient-to-r from-slate-900 to-slate-950 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-black text-white text-base sm:text-lg">
                Fasilitas Carport Mobil & Parkir Motor Aman
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                Biaya sewa bulanan sudah mencakup Wi-Fi fiber optic cepat, fasilitas dapur bersama, air bersih, dan akses keluar masuk 24 jam. Listrik menggunakan sistem token mandiri per kamar.
              </p>
            </div>
          </div>

          <a
            href={buatLinkWa(kost?.whatsapp, kost?.nama)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black text-xs sm:text-sm active:scale-95 transition-all shrink-0 shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-yellow-300"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>Jadwalkan Survei Kamar</span>
          </a>
        </div>

      </div>
    </section>
  );
}
