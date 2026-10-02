import React, { useState } from 'react';
import { formatRupiah, buatLinkWa } from '../data/kostData';
import { X, Check, MessageCircle, Maximize2, Info, ChevronLeft, ChevronRight } from 'lucide-react';

export default function RoomModal({ kamar, kost, onClose }) {
  if (!kamar) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = kamar.galeri && kamar.galeri.length > 0 ? kamar.galeri : [kamar.gambarUtama];
  const isAvailable = kamar.status === 'Tersedia';
  const isRose = kost?.temaWarna === 'rose';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Box */}
      <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        
        {/* Header / Close button */}
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/80 hover:bg-white text-gray-700 shadow-md backdrop-blur-md transition-all cursor-pointer"
            aria-label="Tutup Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Container */}
        <div className="overflow-y-auto flex-1">
          
          {/* Main Photo Gallery */}
          <div className="relative aspect-16/10 sm:aspect-16/9 bg-gray-900">
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
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-all cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
              {activeImageIndex + 1} / {images.length} Foto
            </div>
          </div>

          {/* Thumbnail Strip */}
          {images.length > 1 && (
            <div className="flex gap-2 p-3 bg-gray-50 border-b border-gray-100 overflow-x-auto">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx 
                      ? isRose ? 'border-rose-600 scale-95' : 'border-emerald-600 scale-95'
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
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                  isAvailable 
                    ? isRose ? 'bg-rose-100 text-rose-800' : 'bg-emerald-100 text-emerald-800'
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {isAvailable ? `Tersedia (${kamar.sisaKamar} Kamar)` : 'Penuh'}
                </span>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Maximize2 className="w-3.5 h-3.5" /> {kamar.ukuran}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{kamar.nama}</h2>
            </div>

            {/* Price Box */}
            <div className={`border rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
              isRose ? 'bg-rose-50/60 border-rose-100' : 'bg-emerald-50/70 border-emerald-100'
            }`}>
              <div>
                <p className={`text-xs font-semibold uppercase tracking-wider ${
                  isRose ? 'text-rose-800' : 'text-emerald-800'
                }`}>
                  Biaya Sewa Bulanan
                </p>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className={`text-3xl font-extrabold ${
                    isRose ? 'text-rose-600' : 'text-emerald-700'
                  }`}>
                    {formatRupiah(kamar.hargaBulan)}
                  </span>
                  <span className="text-xs text-gray-500">/ bulan</span>
                </div>
              </div>
              <div className="sm:text-right border-t sm:border-t-0 sm:border-l border-gray-200 pt-2 sm:pt-0 sm:pl-5">
                <p className="text-xs text-gray-600">Sewa Tahunan:</p>
                <p className="text-base font-bold text-gray-900">{formatRupiah(kamar.hargaTahun)}</p>
              </div>
            </div>

            {/* Full Facilities List */}
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider text-xs">
                Fasilitas Lengkap Kamar Ini:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(kamar.fasilitasKamar || []).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-700 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                    <Check className={`w-4 h-4 shrink-0 ${isRose ? 'text-rose-600' : 'text-emerald-600'}`} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Note / Info */}
            <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-amber-50 border border-amber-200/60 text-xs text-amber-900">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Catatan Iuran & Listrik:</p>
                <p className="text-amber-800 mt-0.5">{kamar.biayaLain}</p>
              </div>
            </div>

          </div>

        </div>

        {/* Modal Sticky Footer CTA */}
        <div className="p-4 sm:p-5 bg-gray-50 border-t border-gray-100 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="py-3 px-5 rounded-xl border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-white active:scale-95 transition-all cursor-pointer"
          >
            Tutup
          </button>

          <a
            href={buatLinkWa(kost.whatsapp, kost.nama, kamar.nama)}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-white font-semibold text-sm active:scale-98 shadow-md transition-all ${
              isRose ? 'bg-rose-600 hover:bg-rose-700 shadow-rose-600/25' : 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/25'
            }`}
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isAvailable ? 'Booking / Tanya via WA' : 'Daftar Waiting List via WA'}</span>
          </a>
        </div>

      </div>

    </div>
  );
}
