import React from 'react';
import { Check, X, Sparkles, ArrowRight } from 'lucide-react';
import { formatRupiah, buatLinkWa } from '../data/kostData';

export default function RoomComparison({ kost }) {
  const specs = [
    { label: 'Luas Kamar', studio: '14 m² (3.5 x 4m)', deluxe: '18 m² (4 x 4.5m)', executive: '24 m² (4.5 x 5.5m)' },
    { label: 'Tipe Ranjang', studio: 'Queen (140 x 200)', deluxe: 'Queen (160 x 200)', executive: 'King Bed (180 x 200)' },
    { label: 'Dapur Pribadi (Kitchenette)', studio: false, deluxe: false, executive: 'Dapur & Sink di Kamar' },
    { label: 'Kulkas Pribadi di Kamar', studio: 'Kulkas Mini', deluxe: 'Kulkas 1 Pintu', executive: 'Kulkas 2 Pintu / Jumbo' },
    { label: 'Kamar Mandi Dalam', studio: true, deluxe: true, executive: true },
    { label: 'Water Heater (Air Hangat)', studio: false, deluxe: true, executive: 'Water Heater Mewah' },
    { label: 'AC Pendingin Ruangan', studio: true, deluxe: 'AC Daikin', executive: 'AC Daikin 1 PK Inverter' },
    { label: 'Smart TV Layar Datar', studio: true, deluxe: '32 Inch Smart TV', executive: '43 Inch 4K UHD' },
    { label: 'Dining Area / Meja Makan', studio: false, deluxe: false, executive: 'Meja Makan Pribadi' },
    { label: 'Workstation Meja Kerja', studio: 'Meja Minimalis', deluxe: 'Meja Kerja + Kursi', executive: 'Workstation Luas' },
    { label: 'Parkir Mobil & Motor Indoor', studio: true, deluxe: true, executive: true },
    { label: 'Akses Keluar Masuk 24 Jam', studio: true, deluxe: true, executive: true },
    { label: 'Tarif Sewa Bulanan', studio: formatRupiah(2200000), deluxe: formatRupiah(2500000), executive: formatRupiah(2850000) },
  ];

  return (
    <section id="komparasi" className="py-16 md:py-20 bg-slate-950 border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Tabel Perbandingan Transparan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            Bandingkan Fasilitas Antar Tipe Suite
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Pilih unit kamar yang paling sesuai dengan kebutuhan ruang, privasi memasak mandiri, dan kenyamanan mobilitas Anda di Semarang.
          </p>
        </div>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900/80 shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900">
                <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider text-slate-400 min-w-[180px]">
                  Fasilitas & Spesifikasi
                </th>
                <th className="p-4 sm:p-5 text-center min-w-[200px]">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 block">
                    Paling Terjangkau
                  </span>
                  <span className="text-base font-black text-white block mt-0.5">
                    Studio Suite
                  </span>
                  <span className="text-sm font-bold text-slate-300 block mt-1">
                    Rp 2.200.000 <span className="text-xs font-normal text-slate-400">/bln</span>
                  </span>
                </th>
                <th className="p-4 sm:p-5 text-center min-w-[220px] bg-amber-500/10 border-x border-amber-500/20">
                  <span className="inline-block text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 mb-1">
                    Best Seller / Terpopuler
                  </span>
                  <span className="text-base font-black text-white block mt-0.5">
                    Deluxe Suite
                  </span>
                  <span className="text-sm font-bold text-amber-400 block mt-1">
                    Rp 2.500.000 <span className="text-xs font-normal text-slate-400">/bln</span>
                  </span>
                </th>
                <th className="p-4 sm:p-5 text-center min-w-[220px]">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400 block">
                    Private Kitchen (Langka)
                  </span>
                  <span className="text-base font-black text-white block mt-0.5">
                    Executive Suite
                  </span>
                  <span className="text-sm font-bold text-slate-300 block mt-1">
                    Rp 2.850.000 <span className="text-xs font-normal text-slate-400">/bln</span>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
              {specs.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-slate-300">
                    {row.label}
                  </td>
                  
                  {/* Studio */}
                  <td className="p-4 sm:p-5 text-center text-slate-300">
                    {typeof row.studio === 'boolean' ? (
                      row.studio ? (
                        <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-slate-600 mx-auto" />
                      )
                    ) : (
                      <span className="font-bold">{row.studio}</span>
                    )}
                  </td>

                  {/* Deluxe (Highlighted Column) */}
                  <td className="p-4 sm:p-5 text-center text-white bg-amber-500/5 border-x border-amber-500/20 font-bold">
                    {typeof row.deluxe === 'boolean' ? (
                      row.deluxe ? (
                        <Check className="w-5 h-5 text-amber-400 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-slate-600 mx-auto" />
                      )
                    ) : (
                      <span className="text-amber-300 font-extrabold">{row.deluxe}</span>
                    )}
                  </td>

                  {/* Executive with Private Kitchen */}
                  <td className="p-4 sm:p-5 text-center text-slate-300">
                    {typeof row.executive === 'boolean' ? (
                      row.executive ? (
                        <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-slate-600 mx-auto" />
                      )
                    ) : (
                      <span className="font-bold text-white">{row.executive}</span>
                    )}
                  </td>
                </tr>
              ))}

              {/* Action Buttons Row */}
              <tr className="bg-slate-900 border-t border-slate-800">
                <td className="p-4 sm:p-5 font-bold text-slate-400">Aksi Booking</td>
                <td className="p-4 sm:p-5 text-center">
                  <a
                    href={buatLinkWa(kost?.whatsapp, kost?.nama, 'Studio Suite Room')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all border border-slate-700"
                  >
                    <span>Pilih Studio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </td>
                <td className="p-4 sm:p-5 text-center bg-amber-500/10 border-x border-amber-500/20">
                  <a
                    href={buatLinkWa(kost?.whatsapp, kost?.nama, 'Deluxe Suite Room')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 text-xs font-black shadow-md shadow-amber-500/20 hover:from-amber-400 hover:to-yellow-300 transition-all"
                  >
                    <span>Pilih Deluxe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </td>
                <td className="p-4 sm:p-5 text-center">
                  <a
                    href={buatLinkWa(kost?.whatsapp, kost?.nama, 'Executive Suite with Private Kitchen')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all border border-slate-700"
                  >
                    <span>Pilih Executive</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
