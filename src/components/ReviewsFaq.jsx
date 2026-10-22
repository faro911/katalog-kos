import { Star, MessageCircle, ChevronDown, HelpCircle } from 'lucide-react';
import { buatLinkWa } from '../data/kostData';

export default function ReviewsFaq({ kost }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const ulasan = kost.ulasanPenghuni || [];
  const faq = kost.faq || [];

  return (
    <section id="ulasan" className="py-16 md:py-24 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Testimonials Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Pengalaman Nyata Penghuni</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              Apa Kata Penghuni Tentang BS Residence?
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Testimoni jujur dari para dokter, eksekutif perbankan, dan pasangan profesional yang mempercayakan hunian mereka di BS Residence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ulasan.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-800/90 hover:shadow-2xl hover:shadow-amber-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500">
                      {item.waktu}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                    "{item.teks}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950 font-black text-sm flex items-center justify-center shrink-0">
                    {item.nama.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-white leading-tight">
                      {item.nama}
                    </h4>
                    <p className="text-[11px] font-semibold text-amber-400 mt-0.5">
                      {item.profesi}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="pt-8 border-t border-slate-800">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Pertanyaan yang Sering Diajukan</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Tanya Jawab Seputar BS Residence
            </h2>
            <p className="text-sm text-slate-400">
              Informasi lengkap seputar mekanisme sewa, fasilitas parkir & valet, serta ketentuan tinggal.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3.5">
            {faq.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'bg-slate-900 border-amber-500/50 shadow-lg shadow-amber-500/5' 
                      : 'bg-slate-900/60 border-slate-800 hover:bg-slate-900 hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-extrabold text-sm sm:text-base text-white">
                      {item.tanya}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-amber-400' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800">
                      {item.jawab}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Box inside FAQ */}
          <div className="max-w-3xl mx-auto mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl shadow-amber-500/20">
            <div>
              <h4 className="font-black text-base sm:text-lg">Ingin Menanyakan Unit Kosong Lainnya?</h4>
              <p className="text-xs sm:text-sm text-slate-900/80 font-medium mt-1">
                Pengelola kami siap merespons pertanyaan dan mengonfirmasi ketersediaan kamar secara cepat melalui WhatsApp.
              </p>
            </div>
            <a
              href={buatLinkWa(kost.whatsapp, kost.nama)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-950 text-white font-black text-xs shrink-0 shadow-lg hover:bg-slate-900 active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Hubungi Pengelola</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
