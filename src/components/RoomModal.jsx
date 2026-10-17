import React, { useState } from 'react';
import { formatRupiah, buatLinkWa } from '../data/kostData';
import { X, Check, MessageCircle, Maximize2, Info, ChevronLeft, ChevronRight } from 'lucide-react';

export default function RoomModal({ kamar, kost, onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!kamar) return null;

  const images = kamar.galeri && kamar.galeri.length > 0 ? kamar.galeri : [kamar.gambarUtama];
  const isAvailable = kamar.status === 'Tersedia';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Box */}
      <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[92vh] border border-slate-200">
        
        {/* Close button */}
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-lg backdrop-blur-md transition-all cursor-pointer hover:scale-105 active:scale-95"
            aria-label="Tutup Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Container */}
        <div className="overflow-y-auto flex-1">
          
          {/* Main Photo Gallery */}
          <div className="relative aspect-16/10 sm:aspect-16/9 bg-slate-950">
            <img
              src={images[activeImageIndex]}
              alt={`${kamar.nama} - Foto ${activeImageIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-300"
            />

            {/* Slider Next/Prev Controls */}
            {images.length > 1 && (
              <>
                <button
                  onClick={() => setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-all cursor-pointer"
                  aria-label="Foto Sebelumnya"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-all cursor-pointer"
                  aria-label="Foto Selanjutnya"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-lg border border-white/20">
              {activeImageIndex + 1} / {images.length} Foto
            </div>

            {/* Bathroom Tag */}
            {kamar.tipeKm && (
              <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-lg border border-white/20">
                {kamar.tipeKm}
              </div>
            )}
          </div>

          {/* Thumbnail Strip */}
          {images.length > 1 && (
            <div className="flex gap-2 p-3 bg-slate-50 border-b border-slate-200/80 overflow-x-auto">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-16 h-12 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx 
                      ? 'border-rose-600 scale-98 ring-2 ring-rose-200' 
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Title & Status */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                  isAvailable 
                    ? 'bg-emerald-100 text-emerald-800' 
                    : 'bg-slate-100 text-slate-700'
                }`}>
                  {isAvailable ? `Tersedia (${kamar.sisaKamar} Kamar)` : 'Penuh Terisi'}
                </span>
                <span className="text-xs text-slate-500 font-semibold flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full">
                  <Maximize2 className="w-3.5 h-3.5" /> Luas {kamar.ukuran}
                </span>
                {kamar.badgePromo && (
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200/60">
                    {kamar.badgePromo}
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                {kamar.nama}
              </h2>
            </div>

            {/* Price Box */}
            <div className="border border-rose-100 rounded-3xl p-5 bg-gradient-to-r from-rose-50/80 to-pink-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-rose-800">
                  Tarif Sewa Bulanan
                </p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-black text-rose-600">
                    {formatRupiah(kamar.hargaBulan)}
                  </span>
                  <span className="text-xs font-medium text-slate-500">/ bulan</span>
                </div>
              </div>
              {kamar.hargaTahun && (
                <div className="sm:text-right border-t sm:border-t-0 sm:border-l border-rose-200/80 pt-3 sm:pt-0 sm:pl-6">
                  <p className="text-xs font-semibold text-slate-600">Paket Hemat Tahunan:</p>
                  <p className="text-lg font-black text-slate-900 mt-0.5">
                    {formatRupiah(kamar.hargaTahun)}
                  </p>
                </div>
              )}
            </div>

            {/* Full Facilities List */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                Fasilitas Lengkap di Kamar Ini:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(kamar.fasilitasKamar || []).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                    <Check className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Note */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Ketentuan Iuran & Pemakaian:</p>
                <p className="text-amber-800 mt-0.5 leading-relaxed">{kamar.biayaLain}</p>
              </div>
            </div>

          </div>

        </div>

        {/* Modal Sticky Footer CTA */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="py-3 px-5 rounded-2xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-white active:scale-95 transition-all cursor-pointer"
          >
            Tutup
          </button>

          <a
            href={buatLinkWa(kost.whatsapp, kost.nama, kamar.nama)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-700 hover:to-rose-600 text-white font-bold text-sm shadow-md shadow-rose-600/20 active:scale-98 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>{isAvailable ? 'Booking / Tanya Kamar via WA' : 'Tanya Jadwal Waiting List via WA'}</span>
          </a>
        </div>

      </div>

    </div>
  );
}
