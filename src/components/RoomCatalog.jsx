import React, { useState } from 'react';
import { buatLinkWa } from '../data/kostData';
import RoomCard from './RoomCard';
import { BedDouble, CheckCircle2, MessageCircle } from 'lucide-react';

export default function RoomCatalog({ kost, onSelectRoom }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredKamar = (kost.kamar || []).filter((k) => {
    if (activeFilter === 'available') return k.status === 'Tersedia';
    if (activeFilter === 'tipe-a') return k.id.includes('deluxe') || k.nama.toLowerCase().includes('tipe a');
    if (activeFilter === 'tipe-b') return k.id.includes('suite') || k.nama.toLowerCase().includes('tipe b');
    return true;
  });

  return (
    <section id="kamar" className="py-16 md:py-24 bg-slate-50/70 border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200/60">
            <BedDouble className="w-3.5 h-3.5" />
            <span>Katalog Unit Eksklusif</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Pilihan Tipe Kamar & Tarif Sewa
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Semua kamar fully furnished ber-AC, kamar mandi dalam dengan water heater, Smart TV, dan meja belajar untuk kenyamanan maksimal Anda.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-10">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/25 scale-102'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Semua Tipe Kamar ({(kost.kamar || []).length})
          </button>

          <button
            onClick={() => setActiveFilter('available')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeFilter === 'available'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/25 scale-102'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Unit Tersedia ({kost.stats?.kamarTersedia || 3} Kamar)
          </button>

          <button
            onClick={() => setActiveFilter('tipe-a')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeFilter === 'tipe-a'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/25 scale-102'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Tipe A: Deluxe Smart
          </button>

          <button
            onClick={() => setActiveFilter('tipe-b')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeFilter === 'tipe-b'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/25 scale-102'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Tipe B: Executive Suite
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
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-7 border border-rose-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">
                Biaya Sewa Transparan & Bebas Pungutan Tersembunyi
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                Sudah termasuk pemakaian air bersih PDAM lancar, Wi-Fi 100 Mbps unlimited, dapur bersama kompor & gas, dispenser air minum galon gratis, mesin cuci bersama, dan kebersihan lorong. Listrik sistem token mandiri sesuai pemakaian kamar.
              </p>
            </div>
          </div>

          <a
            href={buatLinkWa(kost.whatsapp, kost.nama)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm active:scale-95 transition-all shrink-0 shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Jadwalkan Survei / Tanya Kamar</span>
          </a>
        </div>

      </div>
    </section>
  );
}
