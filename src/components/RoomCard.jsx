import React from 'react';
import { formatRupiah, buatLinkWa } from '../data/kostData';
import { Maximize2, Check, MessageCircle, Eye } from 'lucide-react';

export default function RoomCard({ kamar, kost, onOpenDetail }) {
  const isAvailable = kamar.status === 'Tersedia';
  const isRose = kost?.temaWarna === 'rose';

  return (
    <div className={`group rounded-3xl border transition-all duration-300 flex flex-col overflow-hidden bg-white ${
      isAvailable 
        ? isRose 
          ? 'border-gray-200/80 hover:border-rose-400 hover:shadow-xl hover:shadow-rose-500/10' 
          : 'border-gray-200/80 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10' 
        : 'border-gray-200 opacity-90'
    }`}>
      
      {/* Thumbnail Image & Badges */}
      <div className="relative aspect-16/10 overflow-hidden bg-gray-100">
        <img
          src={kamar.gambarUtama}
          alt={kamar.nama}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Status Badge */}
        <div className="absolute top-3.5 left-3.5">
          {isAvailable ? (
            <span className={`inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-semibold text-white backdrop-blur-md shadow-md ${
              isRose ? 'bg-rose-600/90' : 'bg-emerald-600/90'
            }`}>
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              Tersedia ({kamar.sisaKamar} Kamar)
            </span>
          ) : (
            <span className="inline-flex items-center py-1 px-3 rounded-full text-xs font-semibold bg-gray-800/80 text-gray-200 backdrop-blur-md">
              Penuh Terisi
            </span>
          )}
        </div>

        {/* Bathroom Type Pill */}
        {kamar.tipeKm && (
          <div className="absolute bottom-3.5 left-3.5 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg">
            {kamar.tipeKm}
          </div>
        )}

        {/* Room Size Pill */}
        <div className="absolute bottom-3.5 right-3.5 bg-black/60 backdrop-blur-md text-white text-xs font-medium px-2.5 py-1 rounded-lg flex items-center gap-1">
          <Maximize2 className="w-3 h-3" />
          <span>{kamar.ukuran}</span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Room Title */}
          <h3 className={`font-bold text-lg text-gray-900 transition-colors line-clamp-1 ${
            isRose ? 'group-hover:text-rose-600' : 'group-hover:text-emerald-700'
          }`}>
            {kamar.nama}
          </h3>

          {/* Pricing */}
          <div className="mt-2 flex items-baseline gap-1">
            <span className={`text-2xl font-extrabold ${isRose ? 'text-rose-600' : 'text-emerald-600'}`}>
              {formatRupiah(kamar.hargaBulan)}
            </span>
            <span className="text-xs text-gray-500 font-medium">/ bulan</span>
          </div>

          <p className="text-[11px] text-gray-400 mt-0.5">
            Bisa bayar tahunan: <span className="font-semibold text-gray-600">{formatRupiah(kamar.hargaTahun)}</span>
          </p>

          {/* Key Amenities Preview */}
          <div className="mt-4 pt-3.5 border-t border-gray-100 space-y-2">
            {(kamar.fasilitasKamar || []).slice(0, 4).map((fasil, index) => (
              <div key={index} className="flex items-center gap-2 text-xs text-gray-600">
                <Check className={`w-3.5 h-3.5 shrink-0 ${isRose ? 'text-rose-500' : 'text-emerald-500'}`} />
                <span className="line-clamp-1">{fasil}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card Actions */}
        <div className="pt-3 border-t border-gray-100 grid grid-cols-2 gap-2.5">
          <button
            onClick={() => onOpenDetail(kamar)}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Lihat Foto</span>
          </button>

          <a
            href={buatLinkWa(kost.whatsapp, kost.nama, kamar.nama)}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold active:scale-95 transition-all ${
              isAvailable
                ? isRose 
                  ? 'bg-rose-600 text-white hover:bg-rose-700 shadow-sm shadow-rose-600/20' 
                  : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm shadow-emerald-600/20'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{isAvailable ? 'Tanya Kamar' : 'Waiting List'}</span>
          </a>
        </div>

      </div>

    </div>
  );
}
