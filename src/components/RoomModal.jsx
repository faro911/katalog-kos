import React, { useState } from 'react';
import { formatRupiah, buatLinkWa } from '../data/kostData';
import { X, Check, MessageCircle, Maximize2, Info, ChevronLeft, ChevronRight, Bed } from 'lucide-react';

export default function RoomModal({ kamar, kost, onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!kamar) return null;

  const images = kamar.galeri && kamar.galeri.length > 0 ? kamar.galeri : [kamar.gambarUtama];
  const isAvailable = kamar.status === 'Tersedia';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Box */}
      <div className="relative bg-slate-900 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[92vh] border border-slate-800 text-white">
        
        {/* Close button */}
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-950 text-slate-300 hover:text-white shadow-xl backdrop-blur-md transition-all cursor-pointer hover:scale-105 active:scale-95 border border-slate-700"
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
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all cursor-pointer"
                  aria-label="Foto Sebelumnya"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all cursor-pointer"
                  aria-label="Foto Selanjutnya"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-3 right-3 bg-slate-950/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-lg border border-slate-700">
              {activeImageIndex + 1} / {images.length} Foto
            </div>

            {/* Bathroom Tag */}
            {kamar.tipeKm && (
              <div className="absolute bottom-3 left-3 bg-slate-950/90 backdrop-blur-md text-amber-400 text-[11px] font-bold px-3 py-1 rounded-lg border border-amber-500/30">
                {kamar.tipeKm}
              </div>
            )}
          </div>

          {/* Thumbnail Strip */}
          {images.length > 1 && (
            <div className="flex gap-2 p-3 bg-slate-950 border-b border-slate-800 overflow-x-auto">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-16 h-12 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx 
                      ? 'border-amber-400 scale-98 ring-2 ring-amber-400/30' 
                      : 'border-slate-800 opacity-60 hover:opacity-100'
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
                    ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30' 
                    : 'bg-slate-800 text-slate-400 border border-slate-700'
                }`}>
                  {isAvailable ? `Tersedia (${kamar.sisaKamar} Unit Siap Huni)` : 'Penuh Terisi'}
                </span>
                <span className="text-xs text-slate-300 font-semibold flex items-center gap-1 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                  <Maximize2 className="w-3.5 h-3.5 text-amber-400" /> Luas {kamar.ukuran}
                </span>
                {kamar.tipeKasur && (
                  <span className="text-xs text-slate-300 font-semibold flex items-center gap-1 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                    <Bed className="w-3.5 h-3.5 text-amber-400" /> {kamar.tipeKasur}
                  </span>
                )}
                {kamar.badgePromo && (
                  <span className="text-xs font-black px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950">
                    {kamar.badgePromo}
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                {kamar.nama}
              </h2>
            </div>

            {/* Price Box */}
            <div className="border border-slate-800 rounded-3xl p-5 bg-gradient-to-r from-slate-950 to-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Tarif Sewa Bulanan
                </p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-black text-amber-400">
                    {formatRupiah(kamar.hargaBulan)}
                  </span>
                  <span className="text-xs font-medium text-slate-400">/ bulan</span>
                </div>
              </div>
              {kamar.hargaTahun && (
                <div className="sm:text-right border-t sm:border-t-0 sm:border-l border-slate-800 pt-3 sm:pt-0 sm:pl-6">
                  <p className="text-xs font-semibold text-slate-400">Paket Hemat Tahunan:</p>
                  <p className="text-lg font-black text-white mt-0.5">
                    {formatRupiah(kamar.hargaTahun)}
                  </p>
                </div>
              )}
            </div>

            {/* Full Facilities List */}
            <div>
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
                Fasilitas Lengkap di Unit Ini:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(kamar.fasilitasKamar || []).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200 bg-slate-950/70 p-3 rounded-2xl border border-slate-800">
                    <Check className="w-4 h-4 shrink-0 text-amber-400" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Note */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
              <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-amber-400">Ketentuan Iuran & Parkir:</p>
                <p className="text-slate-300 mt-0.5 leading-relaxed">{kamar.biayaLain}</p>
              </div>
            </div>

          </div>

        </div>

        {/* Modal Sticky Footer CTA */}
        <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="py-3 px-5 rounded-2xl border border-slate-700 text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-800 active:scale-95 transition-all cursor-pointer"
          >
            Tutup
          </button>

          <a
            href={buatLinkWa(kost.whatsapp, kost.nama, kamar.nama)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/20 active:scale-98 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>{isAvailable ? 'Booking / Tanya via WhatsApp' : 'Daftar Waiting List via WhatsApp'}</span>
          </a>
        </div>

      </div>

    </div>
  );
}
