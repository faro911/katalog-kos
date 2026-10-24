import React, { useState } from 'react';
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
  Building2,
  Plane,
  ShieldAlert,
  Copy,
  Check
} from 'lucide-react';

const iconLocationMap = {
  GraduationCap,
  Train,
  ShoppingBag,
  UtensilsCrossed,
  HeartPulse,
  Compass,
  School,
  Building2,
  Plane
};

export default function LocationRules({ kost }) {
  const [copied, setCopied] = useState(false);
  const [poiFilter, setPoiFilter] = useState('Semua');

  const handleCopyAddress = () => {
    if (kost.alamat) {
      navigator.clipboard.writeText(kost.alamat);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const poiList = kost.lokasiTerdekat || [];

  const filteredPois = poiList.filter((item) => {
    if (poiFilter === 'Semua') return true;
    if (poiFilter === 'Kampus') return item.kategori?.includes('Kampus') || item.kategori?.includes('Pendidikan');
    if (poiFilter === 'Kesehatan') return item.kategori?.includes('Rumah Sakit') || item.kategori?.includes('Kesehatan');
    if (poiFilter === 'Mall & Belanja') return item.kategori?.includes('Mall') || item.kategori?.includes('Belanja') || item.kategori?.includes('Kuliner');
    if (poiFilter === 'Transportasi') return item.kategori?.includes('Transportasi') || item.kategori?.includes('Tol') || item.kategori?.includes('Kereta');
    return true;
  });

  return (
    <section id="lokasi" className="py-16 md:py-24 bg-slate-900 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Lokasi & Destinasi Sekitar (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-3">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span>Konektivitas & Akses Pendidikan</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {kost?.lokasiJudul || 'Lokasi Strategis di Banyumanik - Tembalang'}
              </h2>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {kost?.lokasiDeskripsi || 'Kawasan hunian tenang dan asri, hanya hitungan menit ke Kampus UNDIP Tembalang, Polines, RSND, dan akses gerbang tol Banyumanik.'}
              </p>
            </div>

            {/* POI Filter Buttons */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['Semua', 'Kampus', 'Kesehatan', 'Mall & Belanja', 'Transportasi'].map((f) => (
                <button
                  key={f}
                  onClick={() => setPoiFilter(f)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    poiFilter === f
                      ? 'bg-amber-400 text-slate-950 font-black shadow-sm'
                      : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {f === 'Semua' ? 'Semua Destinasi' : f}
                </button>
              ))}
            </div>

            {/* List of nearby destinations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredPois.map((item, index) => {
                const IconComponent = iconLocationMap[item.icon] || MapPin;
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3.5 bg-slate-950/80 rounded-2xl border border-slate-800 shadow-sm hover:border-amber-500/40 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center shrink-0 border border-slate-700">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-xs sm:text-sm text-white line-clamp-1 block">
                          {item.nama}
                        </span>
                        {item.highlight && (
                          <span className="text-[10px] text-amber-400/90 font-semibold block">
                            {item.highlight}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-[11px] font-black px-2.5 py-1 rounded-lg text-amber-400 bg-amber-500/10 border border-amber-500/20 shrink-0 ml-2">
                      {item.jarak}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Google Maps Interactive Embed Card */}
            <div className="p-5 sm:p-6 bg-slate-950 rounded-3xl border border-slate-800 shadow-xl space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950 flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="w-5 h-5 text-slate-950" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-white">Alamat Lengkap Kos</h4>
                    <p className="text-xs text-slate-300 leading-relaxed mt-0.5 max-w-lg">{kost.alamat}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all cursor-pointer border border-slate-700"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Tersalin!' : 'Salin Alamat'}</span>
                  </button>

                  <a
                    href={kost.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 text-xs font-black shadow-md shadow-amber-500/20 active:scale-95 transition-all"
                  >
                    <span>Buka Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Responsive Embedded Map */}
              <div className="w-full h-60 rounded-2xl overflow-hidden border border-slate-800 relative bg-slate-900">
                <iframe
                  title={`Peta Lokasi ${kost?.nama || 'Kost Exclusive D3WI Semarang'}`}
                  src={kost.googleMapsEmbedUrl || "https://maps.google.com/maps?q=-7.0575995,110.4230222&hl=id&z=16&output=embed"}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter contrast-105"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Tata Tertib & Ketentuan (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-3">
                <FileCheck2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Ketertiban Bersama</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Tata Tertib & Ketentuan Tinggal
              </h2>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Diterapkan secara profesional demi menjaga kenyamanan istirahat, ketenangan privasi, dan keamanan aset seluruh penghuni eksekutif.
              </p>
            </div>

            {/* Rules Container Card */}
            <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                <h4 className="font-extrabold text-white text-sm">
                  Komitmen Kualitas Hunian:
                </h4>
              </div>

              <ul className="space-y-3.5">
                {(kost.peraturan || []).map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                      {rule}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-5 pt-4 border-t border-slate-800 bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                <p className="text-xs text-amber-300 font-medium leading-relaxed">
                  💡 Seluruh tamu wajib melapor ke pos security 24 jam demi kenyamanan dan perlindungan privasi seluruh penghuni kos.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
