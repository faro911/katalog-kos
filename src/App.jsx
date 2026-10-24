import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import RoomCatalog from './components/RoomCatalog';
import RoomComparison from './components/RoomComparison';
import Facilities from './components/Facilities';
import LocationRules from './components/LocationRules';
import ReviewsFaq from './components/ReviewsFaq';
import Footer from './components/Footer';
import RoomModal from './components/RoomModal';
import { getActiveKost, buatLinkWa } from './data/kostData';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [currentKost, setCurrentKost] = useState(() => getActiveKost());
  const [selectedRoom, setSelectedRoom] = useState(null);

  // Pantau perubahan URL (jika user navigasi atau ganti path)
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentKost(getActiveKost());
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Update judul tab browser sesuai kos yang dibuka
  useEffect(() => {
    if (currentKost?.nama) {
      document.title = `${currentKost.nama} | ${currentKost.stats?.jarakPusat || 'Banyumanik Semarang'}`;
    }
  }, [currentKost]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">

      {/* Top Sticky Navbar */}
      <Navbar kost={currentKost} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 1. Hero Showcase */}
        <Hero kost={currentKost} />

        {/* 2. Key Pillars / Highlights */}
        <Highlights kost={currentKost} />

        {/* 3. Room Catalog */}
        <RoomCatalog 
          kost={currentKost} 
          onSelectRoom={(kamar) => setSelectedRoom(kamar)} 
        />

        {/* 4. Interactive Room Comparison Table */}
        <RoomComparison kost={currentKost} />

        {/* 5. Hotel-Grade Facilities & Parking */}
        <Facilities kost={currentKost} />

        {/* 6. Location, Nearby POIs, Google Maps & House Rules */}
        <LocationRules kost={currentKost} />

        {/* 7. Testimonials & Accordion FAQ */}
        <ReviewsFaq kost={currentKost} />
      </main>

      {/* Footer */}
      <Footer kost={currentKost} />

      {/* Detail Room Modal (Popup) */}
      {selectedRoom && (
        <RoomModal
          kamar={selectedRoom}
          kost={currentKost}
          onClose={() => setSelectedRoom(null)}
        />
      )}

      {/* Floating WhatsApp Action Widget */}
      <aside aria-label="Aksi Cepat WhatsApp" className="fixed bottom-6 right-6 z-40">
        <a
          href={buatLinkWa(currentKost.whatsapp, currentKost.nama)}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 px-4 sm:px-5 py-3.5 rounded-full text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 active:scale-95 transition-all duration-300 font-black border border-amber-300/40"
        >
          {/* Beacon pulse ping animation */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-slate-950"></span>
          </span>

          <MessageCircle className="w-6 h-6 fill-slate-950 text-slate-950 shrink-0" />
          <div className="text-left hidden sm:block">
            <p className="text-[10px] text-slate-900 font-extrabold uppercase tracking-wider leading-none">Security 24 Jam</p>
            <p className="font-black text-xs sm:text-sm leading-tight mt-0.5 text-slate-950">Tanya Pengelola</p>
          </div>
        </a>
      </aside>

    </div>
  );
}
