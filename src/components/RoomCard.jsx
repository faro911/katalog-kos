import React, { useState } from 'react';
import { formatRupiah, buatLinkWa } from '../data/kostData';
import { 
  Maximize2, 
  Check, 
  MessageCircle, 
  Eye, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';

export default function RoomCard({ kamar, kost, onOpenDetail }) {
  const isAvailable = kamar.status === 'Tersedia';
  const [photoIndex, setPhotoIndex] = useState(0);
  const images = kamar.galeri && kamar.galeri.length > 0 ? kamar.galeri : [kamar.gambarUtama];

  const handleNextPhoto = (e) => {
    e.stopPropagation();
    setPhotoIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrevPhoto = (e) => {
    e.stopPropagation();
    setPhotoIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className={`group rounded-3xl border transition-all duration-300 flex flex-col overflow-hidden bg-white shadow-sm hover:shadow-xl hover:shadow-rose-500/10 ${
      isAvailable 
        ? 'border-slate-200/90 hover:border-rose-400' 
        : 'border-slate-200 opacity-90'
    }`}>
      
      {/* Thumbnail Image Slider */}
      <div 
        className="relative aspect-16/10 overflow-hidden bg-slate-900 cursor-pointer"
        onClick={() => onOpenDetail(kamar)}
      >
        <img
          src={images[photoIndex]}
          alt={kamar.nama}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Gradient shadow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

        {/* Status Badge */}
        <div className="absolute top-3.5 left-3.5 z-10 flex flex-col gap-1.5 items-start">
          {isAvailable ? (
            <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-bold text-white bg-emerald-600/95 backdrop-blur-md shadow-md">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              Tersedia ({kamar.sisaKamar} Kamar)
            </span>
          ) : (
            <span className="inline-flex items-center py-1 px-3 rounded-full text-xs font-bold bg-slate-800/90 text-slate-200 backdrop-blur-md">
              Penuh Terisi
            </span>
          )}

          {kamar.badgePromo && (
            <span className="inline-flex items-center gap-1 py-0.5 px-2.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-rose-600 text-white shadow-sm">
              <Sparkles className="w-2.5 h-2.5" />
              {kamar.badgePromo}
            </span>
          )}
        </div>

        {/* Photo Slider Controls (if multiple images) */}
        {images.length > 1 && (
          <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={handlePrevPhoto}
              className="p-1.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-all"
              aria-label="Foto Sebelumnya"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextPhoto}
              className="p-1.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-all"
              aria-label="Foto Selanjutnya"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Bathroom Type Pill */}
        {kamar.tipeKm && (
          <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-lg border border-white/20">
            {kamar.tipeKm}
          </div>
        )}

        {/* Room Size Pill */}
        <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1 border border-white/20">
          <Maximize2 className="w-3 h-3" />
          <span>{kamar.ukuran}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Room Title */}
          <h3 
            onClick={() => onOpenDetail(kamar)}
            className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-rose-600 transition-colors cursor-pointer line-clamp-1"
          >
            {kamar.nama}
          </h3>

          {/* Key Feature Chips */}
          <div className="flex flex-wrap gap-1.5 mt-2.5">
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-rose-50 text-rose-700">
              Full AC Dingin
            </span>
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-amber-50 text-amber-700">
              Water Heater
            </span>
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700">
              Smart TV
            </span>
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700">
              Wi-Fi 100 Mbps
            </span>
          </div>

          {/* Checklist Facilities preview */}
          <ul className="mt-4 space-y-2 text-xs text-slate-600">
            {(kamar.fasilitasKamar || []).slice(0, 4).map((f, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="line-clamp-1">{f}</span>
              </li>
            ))}
            {(kamar.fasilitasKamar || []).length > 4 && (
              <li className="text-[11px] font-semibold text-rose-600 pt-0.5">
                + {(kamar.fasilitasKamar.length - 4)} Fasilitas Lengkap Lainnya
              </li>
            )}
          </ul>
        </div>

        {/* Pricing & CTA Section */}
        <div className="pt-4 border-t border-slate-100 space-y-3.5">
          <div className="flex items-baseline justify-between">
            <div>
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Tarif Sewa</p>
              <div className="flex items-baseline gap-1">
                <span className="text-xl sm:text-2xl font-black text-slate-900">
                  {formatRupiah(kamar.hargaBulan)}
                </span>
                <span className="text-xs font-semibold text-slate-500">/bulan</span>
              </div>
            </div>

            {kamar.hargaTahun && (
              <div className="text-right">
                <p className="text-[10px] text-slate-400">Opsi Tahunan</p>
                <p className="text-xs font-bold text-emerald-700">
                  {formatRupiah(kamar.hargaTahun)}
                </p>
              </div>
            )}
          </div>

          {/* Buttons: Detail & WhatsApp */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onOpenDetail(kamar)}
              className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Detail & Foto</span>
            </button>

            <a
              href={buatLinkWa(kost.whatsapp, kost.nama, kamar.nama)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-700 hover:to-rose-600 text-white font-bold text-xs shadow-md shadow-rose-600/20 active:scale-95 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Pesan Kamar</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
