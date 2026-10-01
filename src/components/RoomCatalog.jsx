import React, { useState } from 'react';
import { buatLinkWa } from '../data/kostData';
import RoomCard from './RoomCard';
import { BedDouble, CheckCircle2 } from 'lucide-react';

export default function RoomCatalog({ kost, onSelectRoom }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const isRose = kost.temaWarna === 'rose';

  const filteredKamar = kost.kamar.filter((k) => {
    if (activeFilter === 'available') return k.status === 'Tersedia';
    if (activeFilter === 'ac') return k.kategori === 'ac';
    if (activeFilter === 'non-ac') return k.kategori === 'non-ac';
    return true;
  });

  return (
    <section id="kamar" className="py-16 md:py-20 bg-gray-50/60 border-t border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
            isRose ? 'bg-rose-50 text-rose-700' : 'bg-emerald-50 text-emerald-700'
          }`}>
            <BedDouble className="w-3.5 h-3.5" />
            <span>Katalog Pilihan Kamar</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Pilihan Tipe Kamar & Tarif Sewa
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Kamar bersih, ventilasi lega, dan privasi terjaga untuk kenyamanan Anda sehari-hari.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeFilter === 'all'
                ? isRose ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20' : 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
            }`}
          >
            Semua Tipe ({kost.kamar.length})
          </button>

          <button
            onClick={() => setActiveFilter('available')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeFilter === 'available'
                ? isRose ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20' : 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
            }`}
          >
            Hanya yang Tersedia ({kost.stats.kamarTersedia})
          </button>

          <button
            onClick={() => setActiveFilter('ac')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeFilter === 'ac'
                ? isRose ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20' : 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
            }`}
          >
            Tipe AC
          </button>

          <button
            onClick={() => setActiveFilter('non-ac')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeFilter === 'non-ac'
                ? isRose ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20' : 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
            }`}
          >
            Tipe Hemat (Non-AC)
          </button>
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
        <div className={`mt-12 bg-white rounded-2xl p-5 border flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs ${
          isRose ? 'border-rose-100' : 'border-emerald-100'
        }`}>
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
              isRose ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-emerald-600'
            }`}>
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Ingin melihat atau survei kamar langsung ke lokasi?</p>
              <p className="text-xs text-gray-500">Silakan jadwalkan survei terlebih dahulu bersama pengelola agar bisa didampingi.</p>
            </div>
          </div>
          <a
            href={buatLinkWa(kost.whatsapp, kost.nama)}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full sm:w-auto px-5 py-2.5 rounded-xl text-white font-semibold text-xs text-center active:scale-95 shadow-sm transition-all ${
              isRose ? 'bg-rose-600 hover:bg-rose-700' : 'bg-emerald-600 hover:bg-emerald-700'
            }`}
          >
            Chat Buat Janji Survei
          </a>
        </div>

      </div>
    </section>
  );
}
